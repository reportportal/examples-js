import { test, expect, chromium } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';
import pRetry from 'p-retry';
import type { Page } from 'playwright-core';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Must match the installed @playwright/test version and a version supported by Mobitru
const PW_VERSION = '1.61.1';

test.describe.serial('Mobitru Playwright example', () => {
  const mobitru_test = test.extend<{ page: Page }>({
    page: async ({ page }, use) => {
      // extra budget for Mobitru slot release + connect retries between serial tests
      test.setTimeout(150_000);

      // read mobitru settings like host, team code and access token
      const mobitruHost = process.env.MOBITRU_HUB_URL;
      const mobitruTeamCode = process.env.MOBITRU_BILLING_UNIT;
      const mobitruAccessToken = process.env.MOBITRU_ACCESS_TOKEN;

      if (!mobitruHost || !mobitruTeamCode || !mobitruAccessToken) {
        throw new Error(
          'MOBITRU_HUB_URL, MOBITRU_BILLING_UNIT and MOBITRU_ACCESS_TOKEN environment variables are required',
        );
      }

      const httpCredentials = {
        username: mobitruTeamCode,
        password: mobitruAccessToken,
      };
      const mobitruApiAccessToken = btoa(
        `${httpCredentials.username}:${httpCredentials.password}`,
      );

      // prepare a playwright WS endpoint for specific session name and playwright version
      const sessionName = crypto.randomUUID();
      const videoEnabled = process.env.VIDEO_ENABLED || 'true';
      const wsEndpoint =
        `wss://${mobitruTeamCode}:${mobitruAccessToken}@${mobitruHost}` +
        `/playwright/chromium/playwright-${PW_VERSION}` +
        `?headless=false&enableVideo=${videoEnabled}&sessionName=${sessionName}`;

      // Mobitru may need a few seconds to free the previous session slot
      const browser = await pRetry(
        () => chromium.connect({ timeout: 60_000, wsEndpoint }),
        {
          retries: 5,
          minTimeout: 3_000,
          factor: 1.5,
          onFailedAttempt: (error) => {
            console.warn(
              `Mobitru connect attempt ${error.attemptNumber} failed, retrying...`,
              error.message,
            );
          },
        },
      );

      const newPage = await browser.newPage({
        ignoreHTTPSErrors: true,
        viewport: { width: 1920, height: 1080 },
      });

      // get the playwright session id by using the session name specified in WS endpoint
      const sessionInfo = await page.request.get(
        `https://${mobitruHost}/playwright/session/${sessionName}`,
        {
          headers: {
            Authorization: `Basic ${mobitruApiAccessToken}`,
          },
        },
      );
      expect(sessionInfo.ok()).toBeTruthy();
      const jsonResponse = await sessionInfo.json();
      const sessionId = jsonResponse.sessionId;

      // send mobitru recording attribute, so RP will attach the video to the report automatically
      ReportingApi.addAttributes([
        {
          key: 'mobitru_playwright_recording_id',
          value: sessionId,
        },
      ]);

      await use(newPage);

      // close the browser to trigger the saving of video recording
      await browser.close();
      // give Mobitru time to release the device before the next serial test connects
      await sleep(3_000);
    },
  });

  mobitru_test('Playwright website title should contain "Playwright"', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  mobitru_test('Playwright website navigation should be visible', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });
});
