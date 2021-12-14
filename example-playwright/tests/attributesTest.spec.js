const { test, expect } = require('@playwright/test');
const { ReportingApi } = require('@reportportal/agent-js-playwright/reportingApi');

test.describe('Show ReportPortal features',  () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'attributes',
    },
  ], 'Show ReportPortal features');
  ReportingApi.addAttributes([
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], 'Show ReportPortal features');

  test('should have the correct attributes',  () => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'attributes',
      },
      {
        value: 'demo',
      },
    ]);
    expect(true).toBe(true);
  });
});
