const chromedriver = require('chromedriver');

module.exports = {
  src_folders : ['./PFR-exampleChromeDriver/tests'],
  test_workers: true,

  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      screenshots : {
        enabled: true,
        path: './screenshots',
        on_failure: true
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
