# Example for [@reportportal/agent-js-playwright](https://github.com/reportportal/agent-js-playwright)

## Run test example:

Install dependencies:

```bash
npm install
```

Fill in the following options in `playwright.config.ts`:

```typescript
const rpConfig = {
  // required fields
  apiKey: '00000000-0000-0000-0000-000000000000',
  endpoint: 'https://your.reportportal.server/api/v1',
  project: 'Your ReportPortal project name',
  launch: 'Custom regression',
  // optional fields
  attributes: [
    {
      key: 'agent',
      value: 'playwright',
    },
    {
      value: 'demo',
    },
  ],
  description: 'This is an example launch with playwright tests',
  restClientConfig: {
    timeout: 0,
  },
  includeTestSteps: true,
  skippedIssue: false,
};
```

To run the tests, use the following command:
```bash
npm test
```

## Run in SauceLabs

1. If you are using SauceLabs to run Playwright tests, don't forget to include the agent package in `npm` dependencies in the `.sauce/config.yml`:

```yaml
# ...
npm:
  packages:
    "@reportportal/agent-js-playwright": "^5.1.11"
# ...
```

2. Make sure the integration configured on [ReportPortal side](https://reportportal.io/docs/plugins/SauceLabs/).

To make the SauceLabs page visible on ReportPortal UI, just provide the corresponding attributes to any of tests cases where you wish to observe it:

```typescript
test('Just test', async ({ page, browserName }) => {
  ReportingApi.addAttributes([{
    key: 'SLID',
    value: process.env.SAUCE_JOB_ID,
  }, {
    key: 'SLDC',
    value: String(process.env.SAUCE_REGION || '').toLowerCase().includes('us') ? 'US' : 'EU',
  }]);

  // ...
});
```

3. Run the tests

```bash
cross-env SAUCE_USERNAME=\"user_name\" SAUCE_ACCESS_KEY=\"access_key\" saucectl run --build playwright-build-123
```

`SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` can be also set to environment variables prior execution.
