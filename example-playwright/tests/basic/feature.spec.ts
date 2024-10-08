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
  await page.waitForTimeout(1000);

  console.warn('Warning! The **Playwright** website may not contain "ReportPortal" mentions in its `navigation`.');

  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await page.waitForTimeout(1000);
  await expect(title).toHaveText('ReportPortal');
});

test('Just test', async ({ page, browserName }) => {
  ReportingApi.addAttributes([{
    key: 'SLID',
    value: String(process.env.SAUCE_JOB_ID),
  }, {
    key: 'SLDC',
    value: String(process.env.SAUCE_REGION || '').toLowerCase().includes('us') ? 'US' : 'EU',
  }]);

  await page.goto('https://playwright.dev/');

  const title = page.locator('.navbar__inner .navbar__title');
  await page.waitForTimeout(Math.random() * 1000);
  await expect(title).toHaveText('ReportPortal');
});

test('Another test', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await page.waitForTimeout(3000);
  await expect(title).toHaveText('ReportPortal');
});

test('Test to pass', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test.skip('Check that everything is ok', async ({ page, browserName }) => {
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

  await page.waitForTimeout(1000);

  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');

  await page.waitForTimeout(1000);
  await expect(title).toHaveText('ReportPortal');
});
