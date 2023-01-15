import { test, expect } from '@playwright/test';

const suiteName = 'More checks related to Playwright website. It should';

test.describe(suiteName, () => {

  test('has the correct title', async ({ page, browserName }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('redirect to "intro" page after clicking on get started link', async ({ page, browserName }, testInfo) => {
    await page.goto('https://playwright.dev/');

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*intro/);
  });
});

