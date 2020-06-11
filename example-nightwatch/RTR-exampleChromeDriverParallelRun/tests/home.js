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

const { ReportingAPI } = require('../../../build');
ReportingAPI.init();

const suiteName = 'Home';

describe(suiteName, function() {

  this.retries(3);

  before(() => {
    ReportingAPI.startBeforeSuite();
    // beforeSuite related actions
    ReportingAPI.finishBeforeSuite();

    const item = {
      name: suiteName,
      attributes: [{ key: 'suite', value: 'home' }],
      description: 'Common suite description',
    };
    ReportingAPI.startSuite(item);
  });

  after((browser, done) => {
    ReportingAPI.finishSuite(suiteName);
    browser.end(() => {
      ReportingAPI.destroy();
      done();
    });
  });

  beforeEach((browser) => {
    ReportingAPI.startTestCase(browser.currentTest, suiteName);
  });

  afterEach((browser) => {
    ReportingAPI.finishTestCase(browser.currentTest);
  });

  test('demo test', function(browser) {
    const itemName = 'demo test';
    ReportingAPI.addDescription('Demo test for ecosia.org', itemName);

    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('testScreen.png', (data) => {
        ReportingAPI.logInfo('This is a log with screenshot attachment', {
          name: 'testScreen',
          content: data.value,
        }, itemName);
      })
      .rpSaveScreenshot('rpTestScreen.jpg', itemName)
      .rpLog('Screenshot attached successfully', 'INFO', itemName)
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();

    ReportingAPI.logInfo('Info log for suite', null, suiteName);

    ReportingAPI.addAttributes([{ key: 'check', value: 'success' }], itemName);
    ReportingAPI.addDescription('Attributes added to the test item', itemName);
  });

  test('beta test', function(browser) {
    ReportingAPI.addDescription('Demo test for ecosia.org #2', 'beta test');

    let expectedMainlineText = 'Nightwatch.jsasd';

    if (browser.currentTest.results.retries > 2) {
      expectedMainlineText = 'Nightwatch.js';
    }

    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', expectedMainlineText)
      .end();
  });
});
