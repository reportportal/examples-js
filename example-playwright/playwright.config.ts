import 'dotenv/config';
import { PlaywrightTestConfig } from '@playwright/test';

const rpConfig = {
  apiKey: 'reportPortalApiKey',
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
  timeout: 2 * 60 * 1000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  workers: 5,
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
  reporter: [['@reportportal/agent-js-playwright', rpConfig]],
  testDir: './tests',
  projects: [
    {
      name: 'basic',
      testDir: './tests/basic',
    },
  ],
};

export default config;
