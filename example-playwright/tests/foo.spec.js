const { test, expect } = require('@playwright/test');
const { ReportingApi } = require('@reportportal/agent-js-playwright/reportingApi');

test.describe('Getting Started with statuses', () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'customStatus',
    },
    {
      value: 'demo',
    },
  ], 'Getting Started with statuses');

  ReportingApi.setDescription('This suite contains tests to demonstrate custom statuses reporting via agent-js-playwright', 'Getting Started with statuses')

  ReportingApi.setLaunchStatusCancelled();

  test('basic test', async ({ page }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'customStatus',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test contains demonstrates custom statuses reporting via agent-js-playwright')

    ReportingApi.setStatusInterrupted();
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });
})

