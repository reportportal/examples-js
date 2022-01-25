import { test, expect } from '@playwright/test';
import { ReportingApi} from '@reportportal/agent-js-playwright';

const suiteName = 'Description with error';

test.describe(suiteName,  () => {
  ReportingApi.setDescription(
    'This suite contains tests that should fail',
    suiteName,
  );
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'lastErrorInDescription',
    },
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], suiteName);

  test('Test should be failed',  () => {
    ReportingApi.setDescription('Description for this test should contain the last error message, just check:');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'lastErrorInDescription',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ]);
    expect(false).toBe(true);
  });

  test('Test should be failed too',  () => {
    ReportingApi.setDescription('Description for this test should contain the last error message, just check:');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'lastErrorInDescription',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ]);
    expect(true).toBe(false);
  });
});
