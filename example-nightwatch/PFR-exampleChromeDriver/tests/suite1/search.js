const chromedriver = require('chromedriver');

module.exports = {
  '@disabled': false,

  before() {
    chromedriver.start();
  },

  after() {
    chromedriver.stop();
  },

  'demo test google' : function (browser) {
    browser
      .url('https://google.com')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(browser) {
    browser
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      .pause(1000)
      .assert.urlContains('search?')
      .assert.urlContains('nightwatch')
      .end();
  }
};
