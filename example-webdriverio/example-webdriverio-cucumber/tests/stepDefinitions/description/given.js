const { Given } = require('@cucumber/cucumber');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

Given('I go to the website', async () => {
  ReportingApi.addAttributes([{
    key: 'feature',
    value: 'description',
  }]);
  ReportingApi.setDescription('This is a **description** for `given step`');
  await browser.url('https://www.google.com');
});
