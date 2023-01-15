import { PlaywrightTestConfig } from '@playwright/test';

const RPconfig = {
  token: '00000000-0000-0000-0000-000000000000',
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
};

const config: PlaywrightTestConfig = {
  reporter: [['line'], ['@reportportal/agent-js-playwright', RPconfig]],
  testDir: './tests',
  projects: [
    {
      name: 'basic',
      testDir: './tests/basic',
    },
    {
      name: 'by-rp-features',
      testDir: './tests/by-rp-features',
      testIgnore: ['retries.spec.ts'],
      use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
    },
    {
      name: 'with-retries',
      testMatch: /retries.spec.ts/,
      retries: 2,
    },
  ],
};

module.exports = config;
