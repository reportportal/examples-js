import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

test('Wrong basic test', async ({ page }) => {
  ReportingApi.addAttributes([
    {
      value: 'withoutDescribe',
    },
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ]);
  ReportingApi.setDescription('This test without declares a group of tests.');
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('ReportPortal');
});
