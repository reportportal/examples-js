## Example for [@reportportal/agent-js-cypress](https://www.npmjs.com/package/@reportportal/agent-js-cypress)

The examples are written with Cypress >=9 compatibility in mind, but the agent also works with Cypress <9.

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
    apiKey: 'reportportalApiKey',
    launch: 'LAUNCH_NAME',
    project: 'PROJECT_NAME',
    description: 'LAUNCH_DESCRIPTION',
  },
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      registerReportPortalPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
  },
});
```

## Run tests

To run the tests, use the following command:

```cmd
npm test
```
