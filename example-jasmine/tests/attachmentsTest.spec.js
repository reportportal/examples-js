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

const fs = require('fs');
const path = require('path');
const PublicReportingAPI = require('@reportportal/agent-js-jasmine/lib/publicReportingAPI');

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

describe('attachments for the test', function() {
    let originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000000;
    });

    afterEach( function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should have the attachments', async function() {
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
