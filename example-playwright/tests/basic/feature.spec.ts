import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

test('The Playwright`s website main page should contain "ReportPortal" word', async ({ page, browserName }) => {
  console.log('Add **ReportPortal** related *metadata* before starting main test actions.');
  ReportingApi.addAttributes([
    {
      key: 'browser',
      value: browserName,
    },
    {
      value: 'demo',
    },
  ]);
  ReportingApi.setDescription(`
    This test simply checks that **Playwright** website contains **"ReportPortal"** word in the navigation bar.
    But seems like this test will *fail*.
  `);

  console.warn('Warning! The **Playwright** website may not contain "ReportPortal" mentions in its `navigation`.');

  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('ReportPortal');
});
