import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';

const suiteName = 'More checks related to Playwright website. It should';

test.describe(suiteName, () => {
  test.describe.configure({ mode: 'serial', retries: 2 }); // use 'serial' mode and retries for this suite

  ReportingApi.addAttributes([
    {
      key: 'component',
      value: 'website',
    },
    {
      key: 'feature',
      value: 'Title',
    },
    {
      key: 'feature',
      value: 'Intro',
    },
    {
      key: 'feature',
      value: 'Timeout',
    },
  ], suiteName);
  ReportingApi.setDescription(
    'This suite contains several tests that performs some checks with the **Playwright** website main page.',
    suiteName,
  );

  test('has the correct title', async ({ page, browserName }) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'Title',
      },
      {
        key: 'priority',
        value: 'high',
      },
      {
        key: 'browser',
        value: browserName,
      },
    ]);

    ReportingApi.setDescription(`The test name is self-descriptive, but do not hesitate to provide additional *info* about the test,
      e.g. some important notes from the **Test Case Management system**, special conditions, etc.
    `);

    await page.goto('https://playwright.dev/');

    await test.step('step. Have "Playwright" title', async () => {
      await expect(page).toHaveTitle(/Playwright/);
    });

    await expect(page).toHaveTitle(/Playwright/);
  });

  test('redirect to "intro" page after clicking on get started link', async ({ page, browserName }, testInfo) => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'Intro',
      },
      {
        key: 'priority',
        value: 'high',
      },
      {
        key: 'browser',
        value: browserName,
      },
    ]);
    ReportingApi.setDescription(`The test name is self-descriptive, but do not hesitate to provide additional *info* about the test,
      e.g. some important notes from the **Test Case Management system**, special conditions, etc.
    `);

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

test.describe('Checks with "toPass" timeouts', () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'Timeout',
    },
    {
      key: 'priority',
      value: 'low',
    },
  ], 'Checks with "toPass" timeouts');
  ReportingApi.setDescription('This suite contains tests with "toPass" timeouts', 'Checks with "toPass" timeouts');

  test(`Expect pool @desktop`, async () => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'Timeout',
      },
      {
        key: 'priority',
        value: 'low',
      },
    ]);
    await expect
      .poll(
        () => {
          return 2;
        },
        { timeout: 30_000 }
      )
      .toBe(1);
  });
  test('Expect toPass @desktop', async () => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'Timeout',
      },
      {
        key: 'priority',
        value: 'low',
      },
    ]);
    await expect(() => {
      expect(2).toBe(1);
    }).toPass({ timeout: 30_000 });
  });
  test('Should be skipped with a reason @desktop', async () => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'Timeout',
      },
      {
        key: 'priority',
        value: 'low',
      },
    ]);
    test.skip(true, 'skipping test');
    expect(2).toBe(1);
  });
});

