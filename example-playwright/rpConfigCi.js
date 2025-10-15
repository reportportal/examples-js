require('dotenv').config();

const config = {
  endpoint: process.env.RP_ENDPOINT,
  apiKey: process.env.RP_API_KEY,
  launch: process.env.RP_LAUNCH || 'Custom regression',
  project: process.env.RP_PROJECT,
  attributes: [
    {
      key: 'agent',
      value: 'playwright',
    },
    {
      value: 'demo',
    },
    {
      key: 'build',
      value: process.env.BUILD_ID,
    },
  ],
  description: 'This is an example launch with playwright tests',
  launchId: process.env.RP_LAUNCH_ID,
  includeTestSteps: true,
  launchUuidPrint: false,
  skippedIssue: false,
  restClientConfig: {
    timeout: 0,
  },
};

module.exports = { config };
