import { expect, test } from '@playwright/test';
import { LOG_LEVELS, ReportingApi } from '@reportportal/agent-js-playwright';
import * as fs from 'fs';
import * as path from 'path';

const attachments = [
  {
    filename: 'test.jpg',
    type: 'image/jpg',
  },
  {
    filename: 'test.png',
    type: 'image/png',
  },
  {
    filename: 'test.html',
    type: 'text/html',
  },
  {
    filename: 'test.json',
    type: 'application/json',
  },
  {
    filename: 'test.css',
    type: 'application/css',
  },
  {
    filename: 'test.mp4',
    type: 'video/mp4',
  },
];

const suiteName = 'launch, suite and test should contain logs';

test.describe(suiteName, () => {
  ReportingApi.launchLog(LOG_LEVELS.INFO, 'launch log with manually specified info level');
  ReportingApi.launchInfo('info launch log');
  ReportingApi.launchDebug('debug launch log');
  ReportingApi.launchTrace('trace launch log');
  ReportingApi.launchWarn('warn launch log');
  ReportingApi.launchError('error launch log');
  ReportingApi.launchFatal('fatal launch log');

  ReportingApi.info('INFO log for suite', undefined, suiteName);
  ReportingApi.debug( 'DEBUG log for suite', undefined, suiteName);
  ReportingApi.trace('TRACE log for suite', undefined, suiteName);
  ReportingApi.warn('WARN log for suite', undefined, suiteName);
  ReportingApi.error( 'ERROR log for suite', undefined, suiteName);
  ReportingApi.fatal( 'FATAL log for suite', undefined, suiteName);

  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'customLogs',
    },
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], suiteName);

  ReportingApi.setDescription(
    'This suite contains tests to demonstrate custom logs reporting via ReportingApi',
    suiteName,
  );

  test('Test should contain logs', () => {
    ReportingApi.setDescription('This test demonstrates custom logs reporting via ReportingApi');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'customLogs',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ], suiteName);
    ReportingApi.info( 'INFO log for test');
    ReportingApi.debug( 'DEBUG log for test');
    ReportingApi.trace('TRACE log for test');
    ReportingApi.warn( 'WARN log for test');
    ReportingApi.error( 'ERROR log for test');
    ReportingApi.fatal( 'FATAL log for test');

    expect(false).toBe(true);
  });


  test('Test should contain logs with attachments',  async () => {
    ReportingApi.setDescription('This test demonstrates custom logs with attachments reporting via reportingApi');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'customLogsWithAttachments',
      },
      {
        key: 'browser',
        value: 'chrome',
      },
      {
        value: 'demo',
      },
    ], suiteName);
    const readFilesPromises = attachments.map(
      ({ filename, type }) =>
        new Promise<void>((resolve, reject) =>
            fs.readFile(path.resolve(__dirname, './attachments', filename), (err, data) => {
              if (err) {
                reject(err);
              }
              const attachment = {
                name: filename,
                type,
                content: data.toString('base64'),
              };
              ReportingApi.info(`Log with attachment ${filename}`, attachment);
              resolve();
            }),
        ),
    );
    await Promise.all(readFilesPromises);

    expect(true).toBe(true);
  })
});
