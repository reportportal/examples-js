import { test, expect } from '@playwright/test';

test('The Playwright`s website main page should contain "ReportPortal" word', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('ReportPortal');
});
