import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

const suiteName = 'Suite to demonstrate reporting of retried tests.';

test.describe(suiteName,  () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'retries',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription('This suite demonstrates retries reporting', suiteName);

  test('should be passed on the second retry', async ({ page, browserName }, testInfo) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'retries',
      },
      {
        key: 'browser',
        value: browserName,
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test should be retried according to the config');

    let expectedTitle = 'wrong value';

    if (testInfo.retry > 1) {
      expectedTitle = 'Playwright';
    }
    console.log(`Use ${expectedTitle} word to title check`);

    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText(expectedTitle);
  });
});
