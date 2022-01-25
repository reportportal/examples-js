import { test, expect } from '@playwright/test';
import { ReportingApi} from '@reportportal/agent-js-playwright';

const suiteName = 'Getting Started with statuses';

test.describe(suiteName, () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'customStatus',
    },
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], suiteName);

  ReportingApi.setDescription(
    'This suite contains tests to demonstrate custom statuses reporting via reportingApi',
    suiteName,
  );

  ReportingApi.setLaunchStatusPassed();

  test('basic test', async ({ page }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'customStatus',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test demonstrates custom statuses reporting via reportingApi');

    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');

    if (true) {
      // set failed status when it should be passed
      ReportingApi.setStatusFailed();
    }
  });

  test('another basic test', async ({ page }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'customStatus',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test demonstrates custom statuses reporting via reportingApi');

    if (true) {
      // set passed status when it should be failed
      ReportingApi.setStatusPassed();
    }

    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('!Playwright');
  });
});

