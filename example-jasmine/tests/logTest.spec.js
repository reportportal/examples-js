/*
 *  Copyright 2020 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const PublicReportingAPI = require('@reportportal/agent-js-jasmine/lib/publicReportingAPI');
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

describe('Logs for launch/suite/test', function () {
  it('should send logs to the launch', function () {
    PublicReportingAPI.setDescription('This test sends logs with different levels to the launch');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'launchLogs',
      },
    ]);
    PublicReportingAPI.launchLog('INFO', 'info launch log, logs for launch/suite/test');
    PublicReportingAPI.launchInfo('info launch log');
    PublicReportingAPI.launchDebug('debug launch log');
    PublicReportingAPI.launchTrace('trace launch log');
    PublicReportingAPI.launchWarn('warn launch log');
    PublicReportingAPI.launchError('error launch log');
    PublicReportingAPI.launchFatal('fatal launch log');
    PublicReportingAPI.debug('debug message, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.info('info message, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.trace('trace message, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.warn('warning message, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.error('error message, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.fatal('fatal message, testGithubPage', null, 'logs for launch/suite/test');
  });
  it('should send logs to the test item', function () {
    PublicReportingAPI.setDescription(
      'This test sends logs with different levels to the test item',
    );
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'testItemLogs',
      },
    ]);
    PublicReportingAPI.debug('debug message');
    PublicReportingAPI.trace('trace message');
    PublicReportingAPI.warn('warning message');
    PublicReportingAPI.error('error message');
    PublicReportingAPI.fatal('fatal message');
    expect(true).toBe(true);
  });
  it('should contain logs with attachments', async function () {
    PublicReportingAPI.setDescription('This test contains logs with attachments');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'logsWithAttachments',
      },
    ]);
    expect(true).toEqual(true);
    const readFilesPromises = attachments.map(
      ({ filename, type }) =>
        new Promise((resolve) =>
          fs.readFile(path.resolve(__dirname, './attachments', filename), (err, data) => {
            if (err) {
              throw err;
            }
            const attachment = {
              name: filename,
              type,
              content: data.toString('base64'),
            };
            PublicReportingAPI.info('info log with attachment', attachment);
            resolve();
          }),
        ),
    );
    await Promise.all(readFilesPromises);
  });
});
