require('chromedriver');
const cucumber = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const { RPWorld } = require('@reportportal/agent-js-cucumber');

class CustomWorld extends RPWorld {
  constructor(...args) {
    super(...args);

    global.browser = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new Options().headless())
      .build();
  }
}

cucumber.setWorldConstructor(CustomWorld);
