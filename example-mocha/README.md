## Example for [@reportportal/agent-js-mocha](https://www.npmjs.com/package/@reportportal/agent-js-mocha)

## Run test example:

Install the packages:

```cmd
npm install
```

Fill reporterOptions in Mocha:
```javascript
const mochaMain = new Mocha({
  reporter: '@reportportal/agent-js-mocha',
  reporterOptions: {
    endpoint: 'http://your-instance.com:8080/api/v2',
    apiKey: 'reportportalApiKey',
    launch: 'LAUNCH_NAME',
    project: 'PROJECT_NAME',
    description: 'LAUNCH_DESCRIPTION'
  },
  timeout: 250000
});
```

To run the tests, use the following command:
```cmd
npm test
```
