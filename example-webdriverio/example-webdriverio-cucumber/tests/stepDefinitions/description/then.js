const { Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
  ReportingApi.setDescription('This is a **description** for `then step`');

  assert.strictEqual(title, 'Google_2');
});
