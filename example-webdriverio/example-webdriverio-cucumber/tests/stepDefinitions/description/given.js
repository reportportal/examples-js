const { Given } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

Given('I go to the website', async () => {
  ReportingApi.setDescription('This is a **description** for `when step`');
  await browser.url('https://www.google.com');
});
