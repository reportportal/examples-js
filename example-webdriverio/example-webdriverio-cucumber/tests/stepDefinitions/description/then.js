const { Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
  ReportingApi.addAttributes([{
    key: 'feature',
    value: 'description',
  }]);
  ReportingApi.setDescription('This is a **description** for `then step`');

  assert.strictEqual(title, 'Google_2');
});
