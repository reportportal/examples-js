const { ReportingAPI } = require('../../../build');

const suiteName = 'Home';

describe(suiteName, function() {

  this.retries(3);

  before(() => {
    ReportingAPI.startBeforeSuite();
    // beforeSuite related actions
    ReportingAPI.finishBeforeSuite();

    const item = {
      name: suiteName,
      attributes: [{ key: 'suite', value: 'home.js' }],
      description: 'Suite description',
    };
    ReportingAPI.startSuite(item);
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
