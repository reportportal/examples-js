/*
 *  Copyright 2021 EPAM Systems
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
 *
 */

const {ReportingAPI} = require('@reportportal/agent-js-nightwatch');

const suiteName = 'TestCaseId example';

describe(suiteName, () => {
  before(() => {
    const suiteObject = {
      name: suiteName,
      attributes: [{key: 'suite', value: 'testCaseId.js'}]
    };

    ReportingAPI.startSuite(suiteObject);

    ReportingAPI.setTestCaseId('SUITE_testCaseId');
    ReportingAPI.addDescription('This `suite` and `test` contains custom **testCaseId**');
  });

  after((browser, done) => {
    ReportingAPI.finishSuite(suiteName);
    browser.end(() => {
      done();
    });
  });

  beforeEach((browser) => {
    ReportingAPI.startTestCase(browser.currentTest, suiteName);
  });

  afterEach((browser) => {
    ReportingAPI.finishTestCase(browser.currentTest);
  });

  test('Test with custom testCaseId', (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setTestCaseId('TEST_testCaseId');
  });
});
