const fs = require('fs');
const path = require('path');
const { ReportingAPI, FILE_TYPES } = require('../../../build');

const suiteName = 'Search';

module.exports = {
  before: function () {
    const item = {
      name: suiteName,
      description: 'Suite description',
      attributes: [{ key: 'suite', value: 'search' }],
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
      done();
    });
  },

  'test google' : function (browser) {
    browser
      .url('https://google.com')
      .waitForElementPresent('foo', 1000);

    ReportingAPI.logInfo('Info log for demo test item');
    ReportingAPI.launchLogDebug('Debug log for launch');
    ReportingAPI.addDescription('Demo test for google.com');
    ReportingAPI.setTestCaseId('itemTestCaseId');
  },

  'searching nightwatch' : function(browser) {
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
    ReportingAPI.setStatusPassed();
  }
};
