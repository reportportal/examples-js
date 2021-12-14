const { test, expect } = require('@playwright/test');
const { ReportingApi } = require('@reportportal/agent-js-playwright/reportingApi');

test.describe('Description with error',  () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'errorMessageInDescription',
    },
  ], 'Description with error');
  ReportingApi.addAttributes([
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], 'Description with error');

  test('Test should be failed',  () => {
    ReportingApi.setDescription('Description for failed test');
    expect(false).toBe(true);
  });
});
