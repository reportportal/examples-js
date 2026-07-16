/*
 *  Copyright 2026 EPAM Systems
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

require('dotenv').config();

const Mocha = require('mocha');

const mochaMain = new Mocha({
  reporter: '@reportportal/agent-js-mocha',
  reporterOptions: {
    endpoint: process.env.RP_ENDPOINT,
    apiKey: process.env.RP_API_KEY,
    launch: 'Mocha tests for Selenium with Mobitru',
    project: process.env.RP_PROJECT,
  },
  timeout: 250000,
});

try {
  mochaMain.files = ['tests/google.spec.js', 'tests/example-domain.spec.js'];
  mochaMain.run((failures) => process.on('exit', () => process.exit(failures)));
} catch (err) {
  console.error(`Test suite doesn't exists or set. Error: ${err}`);
}
