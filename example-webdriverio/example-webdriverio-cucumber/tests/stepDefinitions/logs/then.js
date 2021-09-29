const { Then } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');
const assert = require('assert');

Then('I want add FATAL log to step', () => {
  ReportingApi.fatal('FATAL log');

  assert.strictEqual(true, false);
});
