import { test, expect } from '@playwright/test';

test('The Playwright`s website main page should contain "ReportPortal" word', async ({ page, browserName }) => {
  await page.waitForTimeout(1000);

  console.warn('Warning! The **Playwright** website may not contain "ReportPortal" mentions in its `navigation`.');

  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await page.waitForTimeout(1000);
  await expect(title).toHaveText('ReportPortal');
});

test('Just test', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');

  const title = page.locator('.navbar__inner .navbar__title');
  await page.waitForTimeout(Math.random() * 1000);
  await expect(title).toHaveText('ReportPortal');
});

test.skip('Check that everything is ok', async ({ page, browserName }) => {
  console.warn('Warning! The **Playwright** website may not contain "ReportPortal" mentions in its `navigation`.');

  await page.waitForTimeout(1000);

  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');

  await page.waitForTimeout(1000);
  await expect(title).toHaveText('ReportPortal');
});
