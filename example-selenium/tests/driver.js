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

const { Builder, Browser } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const MOBITRU_HUB_URL = process.env.MOBITRU_HUB_URL || 'browserhub-us.mobitru.com';

function isMobitruEnabled() {
  return process.env.BROWSER_PROVIDER === 'mobitru';
}

function getBrowserProvider() {
  return isMobitruEnabled() ? 'mobitru' : 'local';
}

async function createMobitruDriver() {
  const billingUnit = process.env.MOBITRU_BILLING_UNIT;
  const accessToken = process.env.MOBITRU_ACCESS_TOKEN;

  if (!billingUnit || !accessToken) {
    throw new Error(
      'MOBITRU_BILLING_UNIT and MOBITRU_ACCESS_TOKEN environment variables are required when BROWSER_PROVIDER=mobitru',
    );
  }

  const mobitruOptions = {
    'mobitru:options': {
      enableVideo: true,
    },
  };

  return new Builder()
    .withCapabilities(mobitruOptions)
    .forBrowser(Browser.CHROME)
    .usingServer(`https://${billingUnit}:${accessToken}@${MOBITRU_HUB_URL}/wd/hub`)
    .build();
}

async function createLocalDriver() {
  const options = new chrome.Options();

  if (process.env.HEADLESS !== 'false') {
    options.addArguments('--headless=new');
  }

  options.addArguments('--no-sandbox', '--disable-dev-shm-usage');

  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

async function createDriver() {
  if (isMobitruEnabled()) {
    return createMobitruDriver();
  }

  return createLocalDriver();
}

async function getMobitruRecordingId(driver) {
  const session = await driver.getSession();

  return session.getId();
}

module.exports = { createDriver, getBrowserProvider, getMobitruRecordingId, isMobitruEnabled };
