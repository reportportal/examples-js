/*
 *  Copyright 2026 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

const MOBITRU_HOST = process.env.MOBITRU_HOST || 'app.mobitru.com';
const RECORDING_ATTRIBUTE_KEY = 'mobitru_mobile_recording_id';

function getMobitruConfig() {
  const billingUnit = process.env.MOBITRU_BILLING_UNIT;
  const accessToken = process.env.MOBITRU_ACCESS_TOKEN;
  const workspaceId = process.env.MOBITRU_WORKSPACE_ID;

  if (!billingUnit || !accessToken) {
    throw new Error(
      'MOBITRU_BILLING_UNIT and MOBITRU_ACCESS_TOKEN environment variables are required',
    );
  }

  return { billingUnit, accessToken, workspaceId };
}

async function sendMobitruRequest(method, path) {
  const { billingUnit, accessToken, workspaceId } = getMobitruConfig();
  const workspacePath = workspaceId ? `/workspace/${workspaceId}` : '';
  const url = `https://${MOBITRU_HOST}/billing/unit/${billingUnit}${workspacePath}/automation/api${path}`;
  const response = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const body = await response.text();

  return { response, body };
}

async function callMobitruApi(method, path) {
  const { response, body } = await sendMobitruRequest(method, path);

  if (!response.ok) {
    throw new Error(`Mobitru API ${method} ${path} failed with ${response.status}: ${body}`);
  }

  return body ? JSON.parse(body) : {};
}

/**
 * Mobitru keeps the Appium session request pending while there is no free device,
 * so the run looks frozen. Checking availability up front gives a clear error instead.
 */
async function getAvailableIosDevices() {
  const { response, body } = await sendMobitruRequest('GET', '/device/ios');

  if (response.status === 404) {
    return [];
  }
  if (!response.ok) {
    throw new Error(`Mobitru API GET /device/ios failed with ${response.status}: ${body}`);
  }

  return JSON.parse(body).map(({ desiredCapabilities }) => desiredCapabilities);
}

function getDeviceUdid() {
  const udid = browser.capabilities.udid || browser.capabilities['appium:udid'];

  if (!udid) {
    throw new Error('Mobitru session capabilities do not contain the device udid');
  }

  return udid;
}

async function startRecording(udid) {
  await callMobitruApi('POST', `/device/${udid}/recording`);
}

async function stopRecording(udid) {
  const { recordingId } = await callMobitruApi('DELETE', `/device/${udid}/recording`);

  return recordingId;
}

function getDeviceAttributes() {
  const { browserName, deviceName, platformVersion } = browser.capabilities;

  return [
    { key: 'browser', value: browserName || 'safari' },
    ...(deviceName ? [{ key: 'device', value: deviceName }] : []),
    ...(platformVersion ? [{ key: 'iOS', value: platformVersion }] : []),
  ];
}

/**
 * Records the device screen while `testFn` runs and reports the device and recording id as test attributes.
 * Must be called inside the test body: the agent sends attributes when the test finishes,
 * so attributes added from `afterEach` hooks would not reach the test item.
 * Attributes are sent in a single call because each `addAttributes` call replaces the previous test attributes.
 */
async function withMobitruRecording(testFn) {
  const udid = getDeviceUdid();

  await startRecording(udid);
  try {
    await testFn();
  } finally {
    const recordingId = await stopRecording(udid);
    ReportingApi.addAttributes([
      ...getDeviceAttributes(),
      { key: RECORDING_ATTRIBUTE_KEY, value: recordingId },
    ]);
  }
}

module.exports = {
  getAvailableIosDevices,
  getMobitruConfig,
  withMobitruRecording,
  MOBITRU_HOST,
};
