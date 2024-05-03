import { defineConfig } from 'vitest/config';
import RPReporter from '@reportportal/agent-js-vitest';

const rpConfig = {
  launch: 'Custom regression with vitest',
  apiKey: '00000000-0000-0000-0000-000000000000',
  endpoint: 'https://your.reportportal.server/api/v1',
  project: 'Your project',
  attributes: [
    {
      key: 'agent',
      value: 'vitest',
    },
    {
      value: 'example',
    },
  ],
  description: 'This is an example launch with Vitest tests',
};

export default defineConfig({
  test: {
    setupFiles: ["@reportportal/agent-js-vitest/setup"],
    reporters: ['default', new RPReporter(rpConfig)],
    fileParallelism: true,
    sequence: {
      concurrent: true,
    },
  },
});
