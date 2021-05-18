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

const {ReportingAPI, FILE_TYPES} = require('@reportportal/agent-js-nightwatch');
const fs = require('fs');
const path = require('path');

const suiteName = 'Logs example';

module.exports = {
  before: () => {
    const suiteObj = {
      name: suiteName,
      attributes: [{key: 'suite', value: 'logs.js'}],
    }
    ReportingAPI.startSuite(suiteObj);

    ReportingAPI.launchLogFatal('Launch FATAL log');
    ReportingAPI.launchLogError('Launch ERROR log');
    ReportingAPI.launchLogWarn('Launch WARN log');
    ReportingAPI.launchLogInfo('Launch INFO log');
    ReportingAPI.launchLogDebug('Launch DEBUG log');
    ReportingAPI.launchLogTrace('Launch TRACE log');

    ReportingAPI.logTrace('TRACE log for suite', null, suiteName);
    ReportingAPI.logError('ERROR log for suite', null, suiteName);
    ReportingAPI.logWarn('WARN log for suite', null, suiteName);
    ReportingAPI.logInfo('INFO log for suite', null, suiteName);
    ReportingAPI.logDebug('DEBUG log for suite', null, suiteName);
    ReportingAPI.logFatal('FATAL log for suite', null, suiteName);

    const attachment = {
      name: 'Cities',
      type: FILE_TYPES.JSON,
      content: fs.readFileSync(path.resolve(__dirname, '../data', 'cities.json')),
    };
    ReportingAPI.launchLogInfo('INFO log with attachment for launch', attachment);

    ReportingAPI.addDescription('This `launch`, `suite` and `steps` contains **different level logs** and logs with **attachments**');
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

  'Step with logs': (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    ReportingAPI.logTrace('step TRACE log');
    ReportingAPI.logError('step ERROR log');
    ReportingAPI.logWarn('step WARN log');
    ReportingAPI.logInfo('step INFO log');
    ReportingAPI.logDebug('step DEBUG log');
    ReportingAPI.logFatal('step FATAL log');

    ReportingAPI.addDescription('This `step` with **different level logs**');
  },

  'Step with attachment' : (browser) => {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .end();

    const attachment = {
      name: 'Cities',
      type: FILE_TYPES.JSON,
      content: fs.readFileSync(path.resolve(__dirname, '../data', 'cities.json')),
    };
    ReportingAPI.logWarn('WARN log with attachment', attachment);

    ReportingAPI.addDescription('This `step` contain log with **attachment**');
  }
}
