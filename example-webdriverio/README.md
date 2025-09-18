## Example for @reportportal/agent-js-webdriverio

## Run test example:

## Installation
Add test framework. Follow the instruction on the page [WDIO frameworks](https://webdriver.io/docs/frameworks)

Run:
```cmd
npm install or npm i
```

## Configuration
Configure `wdio.conf.js` file:
```js
const { Reporter } = require('@reportportal/agent-js-webdriverio');

const rpConfig = {
  reportPortalClientConfig: {
    apiKey: '<API_KEY>',
    endpoint: 'http://your-instance:8080/api/v2',
    launch: 'launch_name',
    project: 'project_name',
    mode: 'DEFAULT',
    debug: false,
    description: 'Launch description',
    attributes: [{ key: 'key', value: 'value' }, { value: 'value' }], // launch attributes
  },
};

exports.config = {
  // ...
  services: [[Reporter, rpConfig]],
  framework: 'jasmine' // chosen framework
  // ...
};
```

To run the tests use command
```cmd
npm run test
```
