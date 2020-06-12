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
 *
 */

const chromedriver = require('chromedriver');
const { RealTimeReporter } = require('@reportportal/agent-js-nightwatch');
const config = require('../rp');

let rpReporter;

module.exports = {
  src_folders: ['./RTR-exampleChromeDriverParallelRun/tests'],
  custom_commands_path: ['./node_modules/@reportportal/agent-js-nightwatch/build/commands'],
  test_workers: true,

  test_settings: {
    default: {
      skip_testcases_on_fail: false,
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      globals: {
        before: function (done) {
          rpReporter = new RealTimeReporter({ ...config, launch: 'PARALLEL_RUN_LAUNCH' });

          const launchParams = {
            description: 'This launch contains nightwatch tests results run with chromedriver',
            attributes: [{ key: 'lib', value: 'chromedriver' }, { key: 'agent', value: 'nightwatch' }],
          };

          rpReporter.startLaunch(launchParams);
          done();
        },

        after: function (done) {
          rpReporter.finishLaunch();
          done();
        },
      },
      persist_globals: true,
      desiredCapabilities: {
        browserName: 'chrome',
          chromeOptions: {
          args: ['--headless']
        },
        acceptSslCerts: true
      }
    }
  }
};
