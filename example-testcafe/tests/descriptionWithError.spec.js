import { RequestLogger } from 'testcafe';
const { ReportingApi } = require('testcafe-reporter-agent-js-testcafe/build/reportingApi');

const url = 'http://localhost:3000/download-file';

const logger = RequestLogger(
  { url, method: 'GET' },
  {
    logResponseHeaders: true,
    logResponseBody: true,
    stringifyResponseBody: true,
  },
);

fixture`Description with error`.page('./hello.html').before(() => {
    ReportingApi.addAttributes([
        {
            key: 'feature',
            value: 'errorMessageInDescription',
        },
    ]);
    ReportingApi.addAttributes([
        {
            key: 'browser',
            value: 'chrome',
        },
        {
            value: 'demo',
        },
    ]);
}).requestHooks(logger);

test('Check file name and content', async (t) => {
    ReportingApi.addAttributes([
        {
            key: 'feature',
            value: 'errorMessageInDescription',
        },
    ]);
    ReportingApi.addAttributes([
        {
            key: 'browser',
            value: 'chrome',
        },
        {
            value: 'demo',
        },
    ]);
  const fileNameRegEx = /attachment; filename=.*.txt/;

  await t
    .click('#download-btn')
    .expect(
      logger.contains((r) => {
        if (r.response.statusCode !== 200) return false;

        const requestInfo = logger.requests[0];

        if (!requestInfo) return false;

        const downloadedFileName = requestInfo.response.headers['content-disposition'];

        if (!downloadedFileName) false;

        if (!fileNameRegEx.test(downloadedFileName)) return false;

        const downloadedFileContent = logger.requests[0].response.body;

        return downloadedFileContent === 'Test content';
      }),
    )
    .ok();
});
