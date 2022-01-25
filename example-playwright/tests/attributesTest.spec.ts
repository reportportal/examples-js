import { test, expect } from '@playwright/test';
import { ReportingApi} from '@reportportal/agent-js-playwright';

const suiteName = 'Show ReportPortal features';

test.describe('Show ReportPortal features',  () => {
  // set description to the suite
  ReportingApi.setDescription(
    'This suite contains tests with attributes provided via ReportingApi',
    suiteName,
  );
  // add attributes to the suite
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'attributes',
    },
  ], suiteName);
  ReportingApi.addAttributes([
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], suiteName);

  test('should have the correct attributes',  () => {
    // set description to the test
    ReportingApi.setDescription('This test just expects that true is equal to true');
    // add attributes to the test
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'attributes',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ]);
    expect(true).toBe(true);
  });

  test('should have the correct attributes too',  () => {
    ReportingApi.setDescription('This test just expects that true is not equal to false',);
    // add attributes to the test
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'attributes',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ]);
    expect(true).not.toBe(false);
  });
});
