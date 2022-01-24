import { test, expect } from '@playwright/test';
import { ReportingApi} from '@reportportal/agent-js-playwright';

const suiteName = 'Suite with retries';

test.describe(suiteName,  () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'retry',
    },
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription('This suite demonstrates retries logic', suiteName);

  test('Failed test with retries', async ({page}, testInfo) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'retry',
      },
      {
        key: 'browser',
        value: 'chrome',
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
    ReportingApi.info(`Use ${expectedTitle} word to title check`);

    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText(expectedTitle);
  });
});
