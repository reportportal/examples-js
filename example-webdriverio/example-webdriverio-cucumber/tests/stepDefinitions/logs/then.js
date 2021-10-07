const { Then } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');
const assert = require('assert');

Then('I want add FATAL log to step', () => {
  ReportingApi.addAttributes([{
    key: 'feature',
    value: 'logs',
  }]);
  ReportingApi.info('Do some actions');
  ReportingApi.fatal('FATAL log');

  assert.strictEqual(true, false);
});
