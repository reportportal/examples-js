import { expect, test } from '@playwright/test';
import { LOG_LEVELS, ReportingApi } from '@reportportal/agent-js-playwright';

const suiteName = 'Logs reporting for test, suite and launch';

test.describe(suiteName, () => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'custom-logs',
    },
    {
      value: 'demo',
    },
  ], suiteName);
  ReportingApi.setDescription(
    'This suite contains tests to demonstrate custom logs reporting.',
    suiteName,
  );

  test('should be failed, should contain logs provided via console methods', () => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'custom-logs',
      },
      {
        key: 'method',
        value: 'console',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.setDescription('This test demonstrates custom logs reporting via native console methods. See [logging](https://github.com/reportportal/agent-js-playwright#logging)');

    console.log('Log smth as INFO log');
    console.info('Log smth as INFO log');
    console.debug('Log smth as INFO log');

    console.warn('Log smth as WARN log');
    console.error('ERROR! Log smth as ERROR log');

    expect(false).toBe(true);
  });

  test('should be failed, should contain logs provided via ReportingApi methods', () => {
    ReportingApi.setDescription('This test demonstrates custom logs reporting via ReportingApi. See [ReportingApi.log](https://github.com/reportportal/agent-js-playwright#log)');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'custom-logs',
      },
      {
        key: 'method',
        value: 'reporting-api',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.log(LOG_LEVELS.INFO, 'log with manually specified info level');
    ReportingApi.info( 'INFO log for test');
    ReportingApi.debug( 'DEBUG log for test');
    ReportingApi.trace('TRACE log for test');
    ReportingApi.warn( 'WARN log for test');
    ReportingApi.error( 'ERROR log for test');
    ReportingApi.fatal( 'FATAL log for test');

    expect(false).toBe(true);
  });

  test('should be failed, should add logs for suite via ReportingApi methods', () => {
    ReportingApi.setDescription('This test demonstrates suite logs reporting via ReportingApi. See [ReportingApi.log](https://github.com/reportportal/agent-js-playwright#log)');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'custom-logs',
      },
      {
        key: 'entity',
        value: 'suite',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.log(LOG_LEVELS.INFO, 'suite log with manually specified info level', undefined, suiteName);
    ReportingApi.info('INFO log for suite', undefined, suiteName);
    ReportingApi.debug( 'DEBUG log for suite', undefined, suiteName);
    ReportingApi.trace('TRACE log for suite', undefined, suiteName);
    ReportingApi.warn('WARN log for suite', undefined, suiteName);
    ReportingApi.error( 'ERROR log for suite', undefined, suiteName);
    ReportingApi.fatal( 'FATAL log for suite', undefined, suiteName);

    expect(false).toBe(true);
  });

  test.skip('should be failed, should add launch logs via ReportingApi methods', () => {
    ReportingApi.setDescription('This test demonstrates launch logs reporting via ReportingApi. See [ReportingApi.launchLog](https://github.com/reportportal/agent-js-playwright#launchlog)');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'custom-logs',
      },
      {
        key: 'entity',
        value: 'launch',
      },
      {
        value: 'demo',
      },
    ]);
    ReportingApi.launchLog(LOG_LEVELS.INFO, 'launch log with manually specified info level');
    ReportingApi.launchInfo('info launch log');
    ReportingApi.launchDebug('debug launch log');
    ReportingApi.launchTrace('trace launch log');
    ReportingApi.launchWarn('warn launch log');
    ReportingApi.launchError('error launch log');
    ReportingApi.launchFatal('fatal launch log');

    expect(false).toBe(true);
  });
});
