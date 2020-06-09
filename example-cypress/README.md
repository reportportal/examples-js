## Example for [@reportportal/agent-js-cypress](https://www.npmjs.com/package/@reportportal/agent-js-cypress)

## Run test example:

Install the packages:

```cmd
npm install
```

Specify the following options in the cypress.json:

```json

{
  "reporter": "agent-js-cypress",
  "reporterOptions": {
    "endpoint": "http://your-instance.com:8080/api/v1",
    "token": "00000000-0000-0000-0000-000000000000",
    "launch": "LAUNCH_NAME",
    "project": "PROJECT_NAME",
    "description": "PROJECT_DESCRIPTION"
  }
}

```

To run the tests, use the following command:
```cmd
npm test
```