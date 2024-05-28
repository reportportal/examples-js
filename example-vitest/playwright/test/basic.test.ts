import { afterAll, beforeAll, describe, test } from 'vitest';
import { preview } from 'vite';
import type { PreviewServer } from 'vite';
import { chromium } from 'playwright';
import type { Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

const PORT = 3001;

describe('basic', async () => {
  let server: PreviewServer;
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    server = await preview({ preview: { port: PORT } });
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close(error => error ? reject(error) : resolve());
    });
  });

  test('should change count when button clicked', async () => {
    ReportingApi.description('My perfect test');
    ReportingApi.attributes([
      {
        key: 'feature',
        value: 'attributes|description'
      },
      {
        value: 'demo',
      },
    ]);
    console.log('Load URL');
    await page.goto(`http://localhost:${PORT}`);
    const button = page.getByRole('button', { name: /Clicked/ });
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Clicked 0 time(s)');

    await button.click();
    await expect(button).toHaveText('Clicked 1 time(s)');
  }, 30_000);

  test('should fail on change count when button clicked', async () => {
    ReportingApi.description('This test will be failed.');
    ReportingApi.attributes([
      {
        key: 'feature',
        value: 'testCaseId'
      },
      {
        value: 'demo',
      },
    ]);
    await page.goto(`http://localhost:${PORT}`);
    const button = page.getByRole('button', { name: /Clicked/ });
    await expect(button).toBeVisible();

    ReportingApi.testCaseId('TEST-123');

    await expect(button).toHaveText('Clicked 0 time(s)');

    console.warn('Smth can be wrong');
    await button.click();
    await expect(button).toHaveText('Clicked xx time(s)');
  }, 800);
})
