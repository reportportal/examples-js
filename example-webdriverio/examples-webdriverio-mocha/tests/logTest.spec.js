/*
 *  Copyright 2023 EPAM Systems
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

const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

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

describe('Logs for launch/suite/test', () => {
  before(() => {
    ReportingApi.trace(
      'suite TRACE message log',
      null,
      'Logs attaching. Launch, suite and tests with different logs',
    );
    ReportingApi.debug(
      'suite DEBUG message log',
      null,
      'Logs attaching. Launch, suite and tests with different logs',
    );
    ReportingApi.info(
      'suite INFO message log',
      null,
      'Logs attaching. Launch, suite and tests with different logs',
    );
    ReportingApi.warn(
      'suite WARN message log',
      null,
      'Logs attaching. Launch, suite and tests with different logs',
    );
    ReportingApi.error(
      'suite ERROR message log',
      null,
      'Logs attaching. Launch, suite and tests with different logs',
    );
    ReportingApi.fatal(
      'suite FATAL message log',
      null,
      'Logs attaching. Launch, suite and tests with different logs',
    );
  });

  it('should send logs to the launch', () => {
    ReportingApi.setDescription('This test sends logs with different levels to the launch');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'launchLogs',
      },
    ]);
    ReportingApi.launchLog('INFO', 'launch log with manually specified info level');
    ReportingApi.launchInfo('info launch log');
    ReportingApi.launchDebug('debug launch log');
    ReportingApi.launchTrace('trace launch log');
    ReportingApi.launchWarn('warn launch log');
    ReportingApi.launchError('error launch log');
    ReportingApi.launchFatal('fatal launch log');
  });

  it('should return -1 when the value is not present', function () {
    ReportingApi.setDescription('this test is pending');
    this.skip();
  });

  it('should send logs to the test item', () => {
    ReportingApi.setDescription('This test sends logs with different levels to the test item');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'testItemLogs',
      },
    ]);
    ReportingApi.debug('debug message');
    ReportingApi.trace('trace message');
    ReportingApi.warn('warning  message');
    ReportingApi.error('error  message');
    ReportingApi.fatal('fatal  message');
    ReportingApi.info('info  message');
    expect(true).to.be.true;
  });

  it('should contain logs with attachments', () => {
    ReportingApi.setDescription('This test contains logs with attachments');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'logsWithAttachments',
      },
    ]);
    expect(true).to.be.true;
  });

  it('should return -2 when the value is not present', function () {
    ReportingApi.setDescription('this test is pending');
    this.skip();
  });

  it('test with attachments', async () => {
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'logs with attachments',
      },
    ]);
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
            ReportingApi.info('info log with attachment', attachment);
            resolve();
          }),
        ),
    );
    await Promise.all(readFilesPromises);

    expect(true).to.be.true;
  });
});
