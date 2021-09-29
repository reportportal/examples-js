const { Given } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

Given('I want change PASSED step status to INFO', () => {
  ReportingApi.setLaunchStatusStopped();
  ReportingApi.setStatusInfo();
});
