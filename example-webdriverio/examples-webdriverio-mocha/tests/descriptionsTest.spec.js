/*
 *  Copyright 2023 EPAM Systems
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

const expect = require('chai').expect;
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

describe('description for suite/test', () => {
  before(() => {
    ReportingApi.setDescription('The description for the suite');
  });

  it('should have the correct description', async () => {
    ReportingApi.addAttributes([{ key: 'feature', value: 'description' }]);
    ReportingApi.setDescription('The description for the test');

    await browser.url('https://webdriver.io');

    const element = await $$('.navbar__link')[1];
    await element.click();

    await browser.waitUntil(async () => (await element.getAttribute('class')).includes('active'));
    const title = await browser.getTitle();

    expect(title).to.be.equal('Introduction | WebdriverIO');
  });
});
