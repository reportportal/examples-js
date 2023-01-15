import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [['line']],
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
