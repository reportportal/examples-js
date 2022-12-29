import { defineConfig } from 'cypress';
import registerReportPortalPlugin from '@reportportal/agent-js-cypress/lib/plugin';

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
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config)
    },
  },
});
