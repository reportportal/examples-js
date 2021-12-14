const { test, expect } = require('@playwright/test');
const { ReportingApi } = require('@reportportal/agent-js-playwright/reportingApi');

test.describe('Suite with retries',  () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'retry',
    },
    {
      value: 'demo',
    },
  ], 'Suite with retries');

  ReportingApi.setDescription('This suite demonstrate retries logic', 'Suite with retries');

  test('Failed test with retries', async ({page}, testInfo) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'retry',
      },
    ]);
    ReportingApi.setDescription('Description for test with retries');
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('wrong value');
  });
});
