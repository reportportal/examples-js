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

require('dotenv').config();

const { Reporter, ReportPortalService } = require('@reportportal/agent-js-webdriverio');
const { getAvailableIosDevices, getMobitruConfig, MOBITRU_HOST } = require('./mobitru');

const { billingUnit, accessToken, workspaceId } = getMobitruConfig();

const rpConfig = {
  apiKey: process.env.RP_API_KEY,
  endpoint: process.env.RP_ENDPOINT,
  project: process.env.RP_PROJECT,
  launch: 'WebdriverIO mobile web tests with Mobitru',
  description: 'Safari on a real iOS device in Mobitru with screen recording',
  attributes: [
    { key: 'provider', value: 'mobitru' },
    { key: 'platform', value: 'iOS' },
  ],
};

exports.config = {
  runner: 'local',
  protocol: 'https',
  hostname: MOBITRU_HOST,
  port: 443,
  path: '/wd/hub',
  headers: {
    Authorization: `Basic ${Buffer.from(`${billingUnit}:${accessToken}`).toString('base64')}`,
  },

  specs: ['./tests/**/*.spec.js'],
  // keep a single session to stay within the Mobitru device slot limit
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:browserName': 'safari',
      ...(workspaceId && { 'mobitru:wid': workspaceId }),
    },
  ],

  logLevel: 'warn',
  bail: 0,
  waitforTimeout: 15000,
  // real devices may take a while to be allocated
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },
  services: [[ReportPortalService, rpConfig]],
  reporters: ['spec', [Reporter, rpConfig]],

  onPrepare: async function () {
    const devices = await getAvailableIosDevices();
    const workspace = workspaceId ? `workspace "${workspaceId}"` : 'the default workspace';

    if (!devices.length) {
      // only SevereServiceError from the ESM build stops the launcher, other errors are just logged
      const { SevereServiceError } = await import('webdriverio');
      throw new SevereServiceError(
        `No free Mobitru iOS devices in ${workspace}. Release a device in Mobitru and rerun the tests.`,
      );
    }

    console.log(
      `Free Mobitru iOS devices in ${workspace}: ${devices
        .map(({ deviceName, platformVersion }) => `${deviceName} (iOS ${platformVersion})`)
        .join(', ')}`,
    );
  },
};
