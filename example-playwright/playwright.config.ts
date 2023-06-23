import { PlaywrightTestConfig } from '@playwright/test';

const RPconfig = {
  apiKey: '00000000-0000-0000-0000-000000000000',
  endpoint: 'https://your.reportportal.server/api/v1',
  project: 'Your project',
  launch: 'Custom regression',
  attributes: [
    {
      key: 'agent',
      value: 'playwright',
    },
    {
      value: 'example',
    },
  ],
  description: 'This is an example launch with playwright tests',
  restClientConfig: {
    timeout: 0,
  },
};

const config: PlaywrightTestConfig = {
  timeout: 2 * 60 * 1000,
  expect: {
    timeout: 8000,
  },
  retries: 0,
  workers: 1,
  use: {
    headless: true,
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    },
    video: 'retain-on-failure',
    actionTimeout: 8000,
    navigationTimeout: 40000,
    trace: 'retain-on-failure',
  },
  reporter: [['@reportportal/agent-js-playwright', RPconfig]],
  testDir: './tests',
  projects: [
    {
      name: 'basic',
      testDir: './tests/basic',
    },
    {
      name: 'by-rp-features',
      testDir: './tests/rp-features',
      testIgnore: ['retries.spec.ts'],
    },
    {
      name: 'with-retries',
      testMatch: /retries.spec.ts/,
      retries: 2,
    },
  ],
};

module.exports = config;
