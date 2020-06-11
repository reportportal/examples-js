const chromedriver = require('chromedriver');

module.exports = {

  before() {
    chromedriver.start();
  },

  after() {
    chromedriver.stop();
  },

  'Demo test Google' : function (browser) {
    browser
      .url('http://google.com')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .assert.urlContains('blablabla');

    browser.end();
  },

  'Demo test Loogle' : function (browser) {
    browser
      .url('http://google.com')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .assert.urlContains('blablabla');

    browser.end();
  }
};
