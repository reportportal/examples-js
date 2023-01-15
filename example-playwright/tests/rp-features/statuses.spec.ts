import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

const suiteName = 'Getting Started with statuses';

test.describe(suiteName, () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'custom-status',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription(
    'This suite contains tests to demonstrate custom statuses reporting via ReportingApi.',
    suiteName,
  );

  test('should be passed, but marked as FAILED in ReportPortal', async ({ page, browserName }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'custom-status',
      },
      {
        key: 'entity',
        value: 'test',
      },
      {
        key: 'browser',
        value: browserName,
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test demonstrates custom statuses reporting via ReportingApi: setStatusFailed()');

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);

    if (true) {
      // set failed status when it should be passed
      ReportingApi.setStatusFailed();
    }
  });

  test('should be failed, but marked as PASSED in ReportPortal', async ({ page, browserName }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'custom-status',
      },
      {
        key: 'entity',
        value: 'test',
      },
      {
        key: 'browser',
        value: browserName,
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test demonstrates custom statuses reporting via ReportingApi: setStatusPassed()');

    if (true) {
      // set passed status when it should be failed
      ReportingApi.setStatusPassed();
    }

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Glaywright/);
  });

  test('should be failed, but set PASSED status for launch in ReportPortal', async ({ page, browserName }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'custom-status-for-launch',
      },
      {
        key: 'entity',
        value: 'launch',
      },
      {
        key: 'browser',
        value: browserName,
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test demonstrates custom statuses reporting via ReportingApi: setLaunchStatusPassed()');

    ReportingApi.setLaunchStatusPassed();

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Glaywright/);
  });
});

