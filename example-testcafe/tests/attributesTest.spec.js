/*
 *  Copyright 2021 EPAM Systems
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

const { ReportingApi } = require('testcafe-reporter-agent-js-testcafe/build/reportingApi');

fixture`Show ReportPortal features`.before(() => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'attributes',
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
}).page`http://devexpress.github.io/testcafe/example`;

test('should have the correct attributes', async (t) => {
  ReportingApi.addAttributes([
    {
      key: 'feature',
      value: 'attributes',
    },
    {
      value: 'demo',
    },
  ]);
  await t.expect(true).eql(true);
});
