import { defineConfig } from 'cypress';
import registerReportPortalPlugin from '@reportportal/agent-js-cypress/lib/plugin';

export const rpConfig = {
  endpoint: 'http://your-instance.com:8080/api/v1',
  token: '00000000-0000-0000-0000-000000000000',
  launch: 'LAUNCH_NAME',
  project: 'PROJECT_NAME',
  description: 'LAUNCH_DESCRIPTION',
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
};

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: ['@reportportal/agent-js-cypress'],
    reportportalAgentJsCypressReporterOptions: rpConfig,
  },
  e2e: {
    specPattern: 'cypress/e2e/basic/*.cy.ts',
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});
