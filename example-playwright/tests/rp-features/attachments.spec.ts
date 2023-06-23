import { expect, test } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';
import * as fs from 'fs';
import * as path from 'path';

const attachments = [
  {
    filename: 'test.jpg',
    type: 'image/jpg',
  },
  {
    filename: 'test.png',
    type: 'image/png',
  },
  {
    filename: 'test.html',
    type: 'text/html',
  },
  {
    filename: 'test.json',
    type: 'application/json',
  },
  {
    filename: 'test.css',
    type: 'application/css',
  },
  {
    filename: 'test.mp4',
    type: 'video/mp4',
  },
];

const suiteName = 'Attachments reporting for test, suite and launch';

test.describe(suiteName, () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'attachments',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription(
    'This suite contains tests to demonstrate attachments reporting via ReportingApi',
    suiteName,
  );

  test('should be passed, should contain attachments provided via Playwright testInfo.attach',  async ({ page }, testInfo) => {
    ReportingApi.setDescription('This test demonstrates attachments reporting via Playwright testInfo.attach');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'attachments',
      },
      {
        key: 'entity',
        value: 'test',
      },
      {
        key: 'method',
        value: 'test-info-attach',
      },
      {
        value: 'demo',
      },
    ]);
    const attachFilesPromises = attachments.map(
      ({ filename, type }) =>
        testInfo.attach(filename, {
          path: path.resolve(__dirname, './attachments', filename),
          contentType: type,
        })
    );
    await Promise.all(attachFilesPromises);

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('should be passed, should contain screenshot attachment provided via Playwright testInfo.attach',  async ({ page }, testInfo) => {
    ReportingApi.setDescription('This test demonstrates screenshot reporting via Playwright testInfo.attach');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'attachments',
      },
      {
        key: 'entity',
        value: 'test',
      },
      {
        key: 'feature',
        value: 'screenshot',
      },
      {
        key: 'method',
        value: 'test-info-attach',
      },
      {
        value: 'demo',
      },
    ]);

    await page.goto('https://playwright.dev');

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await expect(page).toHaveTitle(/Playwright/);
  });

  test.skip('should be failed, should contain attachments provided via ReportingApi methods', async () => {
    ReportingApi.setDescription('This test demonstrates attachments reporting via ReportingApi');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'attachments',
      },
      {
        key: 'entity',
        value: 'test',
      },
      {
        key: 'method',
        value: 'reporting-api',
      },
      {
        value: 'demo',
      },
    ]);

    const readFilesPromises = attachments.map(
      ({ filename, type }) =>
        new Promise<void>((resolve, reject) =>
          fs.readFile(path.resolve(__dirname, './attachments', filename), (err, data) => {
            if (err) {
              reject(err);
            }
            const attachment = {
              name: filename,
              type,
              content: data.toString('base64'),
            };
            ReportingApi.info(`Log with attachment ${filename}`, attachment);
            resolve();
          }),
        ),
    );
    await Promise.all(readFilesPromises);

    expect(false).toBe(true);
  });

  test.skip('should be failed, should add attachments to launch via ReportingApi methods', async () => {
    ReportingApi.setDescription('This test demonstrates launch attachments reporting via ReportingApi. See [ReportingApi.launchLog](https://github.com/reportportal/agent-js-playwright#launchlog)');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'attachments',
      },
      {
        key: 'entity',
        value: 'launch',
      },
      {
        value: 'demo',
      },
    ]);

    const readFilesPromises = attachments.map(
      ({ filename, type }) =>
        new Promise<void>((resolve, reject) =>
          fs.readFile(path.resolve(__dirname, './attachments', filename), (err, data) => {
            if (err) {
              reject(err);
            }
            const attachment = {
              name: filename,
              type,
              content: data.toString('base64'),
            };
            ReportingApi.launchInfo(`Log with attachment ${filename}`, attachment);
            resolve();
          }),
        ),
    );
    await Promise.all(readFilesPromises);

    expect(false).toBe(true);
  });
});
