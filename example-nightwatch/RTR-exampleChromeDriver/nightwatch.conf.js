const chromedriver = require('chromedriver');
const { RealTimeReporter, ReportingAPI } = require('@reportportal/agent-js-nightwatch');
const config = require('../rp');

const rpReporter = new RealTimeReporter({ ...config, launch: 'REAL_TIME_REPORTER_LAUNCH' });

module.exports = {
  src_folders: ['./RTR-exampleChromeDriver/tests'],
  custom_commands_path: '@reportportal/agent-js-nightwatch/commands',

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
          ReportingAPI.init();

          const launchParams = {
            description: 'This launch contains nightwatch tests results run with chromedriver',
            attributes: [{ key: 'lib', value: 'chromedriver' }, { key: 'agent', value: 'nightwatch' }],
          };

          rpReporter.startLaunch(launchParams);
          done();
        },

        after: function (done) {
          rpReporter.finishLaunch();

          ReportingAPI.destroy();
          done();
        },
      },
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
