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

const suiteName = 'Home';

describe(suiteName, function () {

  this.retries(3);

  before(() => {
    ReportingAPI.startBeforeSuite();
    // beforeSuite related actions
    ReportingAPI.addDescription('This is **before suite hook**');
    ReportingAPI.addAttributes([{key: 'suite', value: 'home.js'}]);
    ReportingAPI.finishBeforeSuite();

    const item = {
      name: suiteName,
      attributes: [{ key: 'suite', value: 'home.js' }],
      description: 'Suite description',
    };
    ReportingAPI.startSuite(item);
    ReportingAPI.addDescription('`Suite` contain `tests` with retries')
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

  test('ecosia.org test', function(browser) {
    ReportingAPI.addDescription('Demo test for ecosia.org');

    browser
      .url('https://www.ecosia.org/')
      .setValue('input[type=search]', 'nightwatch')
      .saveScreenshot('testScreen.png', (data) => {
        ReportingAPI.logInfo('This is a log with screenshot attachment', {
          name: 'testScreen',
          content: data.value,
        });
      })
      .rpSaveScreenshot('rpTestScreen.jpg')
      .rpLog('Screenshot attached successfully')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();

    ReportingAPI.logInfo('Info log for suite', null, suiteName);

    ReportingAPI.addAttributes([{ key: 'check', value: 'success' }]);
    ReportingAPI.addDescription('Attributes added to the test item');
  });

  test('search nightwatch on ecosia.org', function(browser) {
    ReportingAPI.addDescription('Demo test for ecosia.org #2');

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
