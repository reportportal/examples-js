## Example for [@reportportal/agent-js-testcafe](https://www.npmjs.com/package/@reportportal/testcafe-reporter-agent-js-testcafe)

## Run test example:

Install the packages:

```cmd
npm install
```

Specify the following [options](https://github.com/reportportal/agent-js-testcafe#configuration) in the rp.json:

```json
{
  "token": "00000000-0000-0000-0000-000000000000",
  "endpoint": "https://your.reportportal.server/api/v1",
  "project": "YourReportPortalProjectName",
  "launch": "YourLauncherName",
  "attributes": [
    {
      "key": "YourKey",
      "value": "YourValue"
    },
    {
      "value": "YourValue"
    }
  ],
  "description": "Your launch description"
}
```

To run the tests via TestCafe API, use the following command:
```cmd
npm run test:viaAPI
```

To run the tests via TestCafe CLI, use the following command:
```cmd
npm run test:viaCLI
```
