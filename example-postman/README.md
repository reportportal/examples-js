## Example for [@reportportal/newman-reporter-agent-js-postman](https://www.npmjs.com/package/@reportportal/newman-reporter-agent-js-postman)

## Run test example:

Install the packages:

```cmd
npm install
```

Specify the following options in index.js:

```json
    {
        "@reportportal/agent-js-postman": {
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