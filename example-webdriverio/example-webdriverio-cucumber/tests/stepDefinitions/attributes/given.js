const { Given } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

Given('I put {string}', function (givenValue) {
  ReportingApi.addAttributes([
    {
      key: 'runner',
      value: 'cucumber',
    },
    {
      value: 'when_attribute',
    },
  ]);

  this.value = givenValue;
});
