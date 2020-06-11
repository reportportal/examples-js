/*
 *  Copyright 2020 EPAM Systems
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

const fs = require('fs');
const path = require('path');
const { ReportingAPI, FILE_TYPES } = require('../../../build');
ReportingAPI.init();

const suiteName = 'Search';

module.exports = {
  before: function () {
    const item = {
      name: suiteName,
      description: 'Suite description',
      attributes: [{ key: 'suite', value: 'someOtherTest.js' }],
    };
    ReportingAPI.startSuite(item);
  },

  beforeEach: function (browser) {
    ReportingAPI.startTestCase(browser.currentTest, suiteName);
  },

  afterEach: function (browser) {
    ReportingAPI.finishTestCase(browser.currentTest);

    ReportingAPI.startAfterTestCase(suiteName);
    // afterEach related actions
    ReportingAPI.finishAfterTestCase();
  },

  after: function (browser, done) {
    ReportingAPI.finishSuite(suiteName);
    browser.end(() => {
      ReportingAPI.destroy();
      done();
    });
  },

  'demo test google' : function (browser) {
    browser
      .url('https://google.com')
      .waitForElementPresent('foos', 1000);

    ReportingAPI.logInfo('Info log for demo test item', null, browser.currentTest.name);
    ReportingAPI.launchLogDebug('Debug log for launch');
    ReportingAPI.addDescription('Demo test for google.com', browser.currentTest.name);
  },

  'part two' : function(browser) {
    browser
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      .pause(1000)
      .assert.urlContains('search?')
      .assert.urlContains('nightwatch')
      .end();

    const attachment = {
      name: 'Cities',
      type: FILE_TYPES.JSON,
      content: fs.readFileSync(path.resolve(__dirname, '../data', 'cities.json')),
    };

    ReportingAPI.launchLogInfo('Log with attachment for launch', attachment);
    ReportingAPI.setStatusWarn(browser.currentTest.name);
  }
};
