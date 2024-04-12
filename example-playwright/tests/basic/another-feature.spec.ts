import { test, expect } from '@playwright/test';

const suiteName = 'More checks related to Playwright website. It should';

test.describe(suiteName, () => {

  test('has the correct title', async ({ page, browserName }) => {

    await page.goto('https://playwright.dev/');

    await test.step('step. Have "Playwright" title', async () => {
      await expect(page).toHaveTitle(/Playwright/);
    });

    await expect(page).toHaveTitle(/Playwright/);
  });

  test('redirect to "intro" page after clicking on get started link', async ({ page, browserName }, testInfo) => {
    console.log('The *"Get started"* link will be clicked.');

    await page.goto('https://playwright.dev/');
    let expectedUrl = /.*intrO/;

    if (testInfo.retry > 1) {
      expectedUrl = /.*intro/;
    }

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(expectedUrl);
  });

  test('should be passed when previous tests passed', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });
});
