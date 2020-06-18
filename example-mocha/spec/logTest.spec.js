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

const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI');

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

describe('launch, suite and test should contain logs', function() {
  before(function() {
    PublicReportingAPI.debug('debug suite log');
    PublicReportingAPI.trace('trace suite log');
    PublicReportingAPI.warn('warn suite log');
    PublicReportingAPI.error('error suite log');
    PublicReportingAPI.fatal('fatal suite log');
    PublicReportingAPI.info('info suite log');
  });
  it('should contain simple logs of different levels', async function() {
    PublicReportingAPI.launchLog('INFO', 'launch log with manually specified info level');
    PublicReportingAPI.launchInfo('info launch log');
    PublicReportingAPI.launchDebug('debug launch log');
    PublicReportingAPI.launchTrace('trace launch log');
    PublicReportingAPI.launchWarn('warn launch log');
    PublicReportingAPI.launchError('error launch log');
    PublicReportingAPI.launchFatal('fatal launch log');
    PublicReportingAPI.debug('debug log');
    PublicReportingAPI.trace('trace log');
    PublicReportingAPI.warn('warning');
    PublicReportingAPI.error('error log');
    PublicReportingAPI.fatal('fatal log');
    PublicReportingAPI.info('info log');
    expect(true).to.be.equal(true);
  });

  it('should contain logs with attachments', async function() {
    expect(true).to.be.equal(true);
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
