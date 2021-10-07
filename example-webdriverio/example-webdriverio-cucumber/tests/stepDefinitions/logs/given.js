const { Given } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

Given('I want add INFO log to step and TRACE log to launch', () => {
  ReportingApi.addAttributes([{
    key: 'feature',
    value: 'logs',
  }]);
  ReportingApi.launchTrace('Launch TRACE log');
  ReportingApi.info('Step INFO log');
  ReportingApi.warn('Step WARN log');
});
