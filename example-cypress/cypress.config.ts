import { defineConfig } from 'cypress';
import registerReportPortalPlugin from '@reportportal/agent-js-cypress/lib/plugin';
import reportersConfig from './multi-reporter-config';

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: reportersConfig,
  e2e: {
    specPattern: 'cypress/e2e/basic/*.cy.ts',
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});
