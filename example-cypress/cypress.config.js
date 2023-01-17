const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'http://your-instance.com:8080/api/v1',
    token: '00000000-0000-0000-0000-000000000000',
    launch: 'LAUNCH_NAME',
    project: 'PROJECT_NAME',
    description: 'LAUNCH_DESCRIPTION',
    reportHooks: false,
    autoMerge: true,
    attributes: [
      {
        key: 'attributeKey',
        value: 'attrbiuteValue',
      },
      {
        value: 'secondAttrbiuteValue',
      },
    ],
    restClientConfig: {
      timeout: 0,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config)
    },
  },
});
