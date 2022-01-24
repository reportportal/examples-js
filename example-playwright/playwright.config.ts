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

const config = {
  reporter: [['line'], ['@reportportal/agent-js-playwright', RPconfig]],
  projects: [
    {
      name: 'default',
      testIgnore: ['retriesTest.spec.ts', 'basicTest.spec.ts'],
    },
    {
      name: 'withAttachments',
      testMatch: /basicTest.spec.ts/,
      use: {
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",
      },
    },
    {
      name: 'withoutAttachments',
      testMatch: /basicTest.spec.ts/,
    },
    {
      name: 'retried',
      testMatch: /retriesTest.spec.ts/,
      retries: 2,
    },
  ],
};

module.exports = config;
