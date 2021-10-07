const { Then } = require('@cucumber/cucumber');
const { ReportingApi } = require("@reportportal/agent-js-webdriverio");
const assert = require('assert');

Then('I should compare it with {string}', function (expectedValue) {
  ReportingApi.addAttributes([
    {
      key: 'runner',
      value: 'cucumber',
    },
    {
      value: 'then_attribute',
    },
  ]);

  assert.strictEqual(this.value, expectedValue);
});
