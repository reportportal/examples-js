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
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');
const { withMobitruRecording } = require('../mobitru');

async function attachScreenshot(name) {
  const screenshot = await browser.takeScreenshot();

  ReportingApi.info(`${name} screenshot`, {
    name: `${name}.png`,
    type: 'image/png',
    content: screenshot,
  });
}

async function waitForTitle(expectedTitlePart) {
  await browser.waitUntil(async () => (await browser.getTitle()).includes(expectedTitlePart), {
    timeoutMsg: `Page title does not contain "${expectedTitlePart}"`,
  });
}

describe('Safari on a Mobitru iOS device', () => {
  it('should open the Mobitru landing page', async () => {
    ReportingApi.setDescription('Opens mobitru.com in Safari and verifies the page title');

    await withMobitruRecording(async () => {
      await browser.url('https://mobitru.com/');
      await waitForTitle('Mobitru');
      await attachScreenshot('mobitru');

      expect(await browser.getTitle()).to.include('Mobitru');
    });
  });

  it('should open the ReportPortal landing page', async () => {
    ReportingApi.setDescription('Opens reportportal.io in Safari and verifies the page title');

    await withMobitruRecording(async () => {
      await browser.url('https://reportportal.io/');
      await waitForTitle('ReportPortal');
      await attachScreenshot('reportportal');

      expect(await browser.getTitle()).to.include('ReportPortal');
    });
  });
});
