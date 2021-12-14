import { PlaywrightTestConfig } from '@playwright/test';

const RPconfig = {
  'token': '00000000-0000-0000-0000-000000000000',
  'endpoint': 'https://your.reportportal.server/api/v1',
  'project': 'Your project',
  'launch': 'Playwright test',
  'attributes': [
    {
      'key': 'key',
      'value': 'value',
    },
    {
      'value': 'value',
    },
  ],
  'description': 'Your launch description',
};

const config: PlaywrightTestConfig = {
  reporter: [[require.resolve('@reportportal/agent-js-playwright'), RPconfig]],
  projects: [
    {
      name: 'default',
      testIgnore: ['retriesTest.spec.js'],
    },
    {
      name: 'retried',
      testMatch: /retriesTest.spec.js/,
      retries: 2,
    },
  ],
};
export default config;
