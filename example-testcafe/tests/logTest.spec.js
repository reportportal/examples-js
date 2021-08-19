import path from 'path';
import fs from 'fs';
import { ReportingApi } from 'testcafe-reporter-agent-js-testcafe/build/reportingApi';

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

fixture`launch, suite and test should contain logs`
  .page('http://devexpress.github.io/testcafe/example')
  .before(async () => {
    ReportingApi.debug('debug suite log');
    ReportingApi.trace('trace suite log');
    ReportingApi.warn('warn suite log');
    ReportingApi.error('error suite log');
    ReportingApi.fatal('fatal suite log');
    ReportingApi.info('info suite log');
  })
  .meta({
        description: 'This suite contains tests to demonstrate custom logs reporting via agent-js-testcafe',
        attributes: [{ key: 'feature', value: 'customLogs' }, { value: 'demo' }],
    });

test('should contain simple logs of different levels', async (page) => {
  ReportingApi.launchLog('INFO', 'launch log with manually specified info level');
  ReportingApi.launchInfo('info launch log');
  ReportingApi.launchDebug('debug launch log');
  ReportingApi.launchTrace('trace launch log');
  ReportingApi.launchWarn('warn launch log');
  ReportingApi.launchError('error launch log');
  ReportingApi.launchFatal('fatal launch log');
  ReportingApi.debug('debug log');
  ReportingApi.trace('trace log');
  ReportingApi.warn('warning');
  ReportingApi.error('error log');
  ReportingApi.fatal('fatal log');
  ReportingApi.info('info log');
  await page.expect(true).eql(true);
})
    .meta({
        description: 'This test demonstrates custom logs reporting via agent-js-testcafe',
        attributes: [{ key: 'feature', value: 'customLogs' }, { value: 'demo' }],
    });

test('should contain logs with attachments', async (page) => {
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

  await page.expect(true).eql(true);
})
    .meta({
        description: 'This test demonstrates custom logs with attachments reporting via agent-js-testcafe',
        attributes: [{ key: 'feature', value: 'customLogs' }, { value: 'demo' }, { value: 'withAttachments' }],
    });
