## Example for [@reportportal/agent-js-testcafe](https://www.npmjs.com/package/@reportportal/testcafe-reporter-agent-js-testcafe)

## Run test example:

Install the packages:

```cmd
npm install
```

Specify the following options in the rp.json:

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
  "description": "Your launch description",
}


```

To run the tests via API testcafe, use the following command:
```cmd
npm run test:viaAPI
```

To run the tests via config, use the following command:
```cmd
npm run test:viaConfig
```
