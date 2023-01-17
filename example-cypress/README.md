## Example for [@reportportal/agent-js-cypress](https://www.npmjs.com/package/@reportportal/agent-js-cypress)

## Installation:

Install the packages:

```cmd
npm install
```

## Configuration:

Specify the options in the cypress.config.js:

```javascript
module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'http://your-instance.com:8080/api/v1',
    token: '00000000-0000-0000-0000-000000000000',
    launch: 'LAUNCH_NAME',
    project: 'PROJECT_NAME',
    description: 'LAUNCH_DESCRIPTION',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config)
    },
  },
});
```

Using `cypress-multi-reporters` package:

```javascript
module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: ['@reportportal/agent-js-cypress', 'mochawesome'],
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
    reportportalAgentJsCypressReporterOptions: {
      endpoint: 'http://your-instance.com:8080/api/v1',
      token: '00000000-0000-0000-0000-000000000000',
      launch: 'LAUNCH_NAME',
      project: 'PROJECT_NAME',
      description: 'LAUNCH_DESCRIPTION',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config)
    },
  },
});
```

## Run tests

To run the tests, use the following command:

```cmd
npm test
```
