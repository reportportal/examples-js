const { test, expect } = require('@playwright/test');
const { ReportingApi } = require('@reportportal/agent-js-playwright/reportingApi');
const fs = require('fs');
const path = require('path');

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

test.describe('launch, suite and test should contain logs', () => {
  ReportingApi.launchLog('INFO', 'launch log with manually specified info level');
  ReportingApi.launchInfo('info launch log');
  ReportingApi.launchDebug('debug launch log');
  ReportingApi.launchTrace('trace launch log');
  ReportingApi.launchWarn('warn launch log');
  ReportingApi.launchError('error launch log');
  ReportingApi.launchFatal('fatal launch log');

  ReportingApi.info('INFO log for suite', undefined, 'launch, suite and test should contain logs');
  ReportingApi.debug( 'DEBUG log for suite', undefined, 'launch, suite and test should contain logs');
  ReportingApi.trace('TRACE log for suite', undefined, 'launch, suite and test should contain logs');
  ReportingApi.warn('WARN log for suite', undefined, 'launch, suite and test should contain logs');
  ReportingApi.error( 'ERROR log for suite', undefined, 'launch, suite and test should contain logs');
  ReportingApi.fatal( 'FATAL log for suite', undefined, 'launch, suite and test should contain logs');

  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'customLogs',
    },
  ], 'launch, suite and test should contain logs');
  ReportingApi.addAttributes([
    {
      key: 'browser',
      value: 'chrome',
    },
    {
      value: 'demo',
    },
  ], 'launch, suite and test should contain logs');

  ReportingApi.setDescription('This suite contains tests to demonstrate custom logs reporting via agent-js-playwright', 'launch, suite and test should contain logs')

  test('Test should contain logs', () => {
    ReportingApi.setDescription('This test demonstrates custom logs reporting via agent-js-playwright')
    ReportingApi.info( 'INFO log for test');
    ReportingApi.debug( 'DEBUG log for test');
    ReportingApi.trace('TRACE log for test');
    ReportingApi.warn( 'WARN log for test');
    ReportingApi.error( 'ERROR log for test');
    ReportingApi.fatal( 'FATAL log for test');

    expect(false).toBe(true);
  });


  test('Test should contain logs with attachments',  async () => {
    ReportingApi.setDescription('This test demonstrates custom logs with attachments reporting via agent-js-playwright')
    const readFilesPromises = attachments.map(
      ({ filename, type }) =>
        new Promise((resolve, reject) =>
            fs.readFile(path.resolve(__dirname, './attachments', filename), (err, data) => {
              if (err) {
                reject(err);
              }
              const attachment = {
                name: filename,
                type,
                content: data.toString('base64'),
              };
              ReportingApi.info('info log with attachment', attachment);
              resolve();
            }),
        ),
    );
    await Promise.all(readFilesPromises);

    await expect(true).toBe(true);
  })
});
