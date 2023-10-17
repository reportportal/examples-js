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

describe('attributes for suite/test', () => {
  before(() => {
    ReportingApi.setDescription('This suite should have the correct suite attributes');
    ReportingApi.addAttributes([
      {
        key: 'suiteKeyOne',
        value: 'suiteValueOne',
      },
    ]);
    ReportingApi.addAttributes([
      {
        key: 'suiteKeyTwo',
        value: 'suiteValueTwo',
      },
      {
        value: 'suiteValueThree',
      },
    ]);
  });

  it('should have the correct test attributes', async () => {
    ReportingApi.setDescription('This test should have the correct test attributes');
    ReportingApi.addAttributes([
      {
        key: 'testKey',
        value: 'testValue',
      },
      {
        value: 'testValueTwo',
      },
    ]);

    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();

    expect(title).to.be.equal(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });
});
