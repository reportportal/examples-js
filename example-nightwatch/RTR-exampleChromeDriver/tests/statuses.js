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

const suiteName = 'Statuses example';

module.exports = {
  before: () => {
    const suiteObj = {
      name: suiteName,
      attributes: [{key: 'suite', value: 'statuses.js'}],
    }
    ReportingAPI.startSuite(suiteObj);

    ReportingAPI.addDescription('This `launch`, `suite` and `steps` contains **different level logs** and logs with **attachments**`');
  },

  beforeEach: (browser) => {
    ReportingAPI.startTestCase(browser.currentTest, suiteName);
  },

  afterEach: (browser) => {
    ReportingAPI.finishTestCase(browser.currentTest);
  },

  after: function (browser, done) {
    ReportingAPI.finishSuite(suiteName);
    browser.end(() => {
      done();
    });
  },

  'Step with FAILED status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusFailed(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
  'Step with PASSED status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusPassed(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
  'Step with SKIPPED status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusSkipped(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
  'Step with STOPPED status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusStopped(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
  'Step with INTERRUPTED status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusInterrupted(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
  'Step with CANCELLED status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusCancelled(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
  'Step with INFO status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusInfo(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
  'Step with WARN status': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.setStatusWarn(browser.currentTest.name);

    ReportingAPI.addDescription('`Step` with custom status');
  },
}
