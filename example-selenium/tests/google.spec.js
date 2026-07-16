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

const { expect } = require('chai');
const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI');
const { createDriver, getBrowserProvider, getMobitruRecordingId, isMobitruEnabled } = require('./driver');

describe('Google page', function () {
  this.timeout(30000);

  let driver;

  before(async () => {
    PublicReportingAPI.setDescription('Selenium test suite for the Google homepage');
    driver = await createDriver();
  });

  after(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it('should display the Google title', async () => {
    PublicReportingAPI.setDescription('Opens Google and verifies the page title');
    const attributes = [
      { key: 'browser', value: 'chrome' },
      { key: 'provider', value: getBrowserProvider() },
    ];

    if (isMobitruEnabled()) {
      attributes.push({
        key: 'mobitru_selenium_recording_id',
        value: await getMobitruRecordingId(driver),
      });
    }

    PublicReportingAPI.addAttributes(attributes);

    await driver.get('https://www.google.com');
    const title = await driver.getTitle();
    const screenshot = await driver.takeScreenshot();

    PublicReportingAPI.info('Google page screenshot', {
      name: 'google.png',
      type: 'image/png',
      content: screenshot,
    });

    expect(title).to.include('Google');
  });
});
