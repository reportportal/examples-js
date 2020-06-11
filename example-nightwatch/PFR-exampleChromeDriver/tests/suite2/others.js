const chromedriver = require('chromedriver');

module.exports = {
  before() {
    chromedriver.start();
  },

  after() {
    chromedriver.stop();
  },

  'NightwatchJS.org': function(browser) {
    browser
      .url('http://nightwatchjs.org')
      .waitForElementVisible('body', 1500)
      .pause(1000)
      .end();
  },

  Finished(browser) {
    browser
      .perform(() => {
        console.log('[perform]: Finished Test:', browser.currentTest.name);
      })
      .end();
  },
};
