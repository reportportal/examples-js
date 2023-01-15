import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

const suiteName = 'More checks related to Playwright website. It should';

test.describe(suiteName, () => {
  ReportingApi.addAttributes([
    {
      key: 'component',
      value: 'website',
    },
    {
      key: 'feature',
      value: 'title',
    },
    {
      key: 'feature',
      value: 'get-started',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription(
    'This suite contains several tests that performs some checks with the Playwright website main page.',
    suiteName,
  );

  test('has the correct title', async ({ page, browserName }) => {
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`The test name is self-descriptive, but do not hesitate to provide additional info about the test,
      e.g. some important notes from the Test Case Management system, special conditions, etc.
    `);

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('redirect to "intro" page after clicking on get started link', async ({ page, browserName }, testInfo) => {
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription(`The test name is self-descriptive, but do not hesitate to provide additional info about the test,
      e.g. some important notes from the Test Case Management system, special conditions, etc.
    `);

    console.log('The "Get started" link will be clicked.');

    await page.goto('https://playwright.dev/');

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*intro/);
  });
});

