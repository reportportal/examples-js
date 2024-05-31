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

describe('tests with specific status', () => {
    test.concurrent('should be passed', () => {
        expect(true).toBe(true);
    });

    test.concurrent('should be failed', () => {
        expect(true).toEqual(false);
    });

    test.skip('should be skipped', () => {
        expect(true).toEqual(true);
    });

  test.concurrent('should be passed with attachment', () => {
    const fileName = 'test.png';
    const fileContent = fs.readFileSync(path.resolve(__dirname, './attachments', fileName));

    ReportingApi.attachment({
      name: fileName,
      type: 'image/png',
      content: fileContent.toString('base64'),
    }, 'Description');

    expect(true).toBe(true);
  });
});
