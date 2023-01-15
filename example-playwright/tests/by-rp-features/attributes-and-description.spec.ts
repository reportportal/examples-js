import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

const suiteName = 'Attributes and description repoting';

test.describe(suiteName,  () => {
  // set description to the suite
  ReportingApi.setDescription(
    'This suite contains tests with attributes provided via ReportingApi',
    suiteName,
  );
  // add attributes to the suite
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'attributes',
    },
    {
      key: 'feature',
      value: 'description',
    },
  ], suiteName);
  ReportingApi.addAttributes([
    {
      value: 'demo',
    },
  ], suiteName);

  test('should be passed, should have the correct attributes and description',  async ({ page, browserName }) => {
    // set description to the test
    ReportingApi.setDescription('This test just expects Playwright website contains "Playwright" word in the title');
    // add attributes to the test
    ReportingApi.addAttributes([
      {
        key: 'browser',
        value: browserName,
      },
      {
        value: 'demo',
      },
    ]);

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});
