## Example for [@reportportal/agent-js-cucumber](https://www.npmjs.com/package/@reportportal/agent-js-cucumber)

## Preparation:
Inside of `config/rpConfig.json` you need to insert data about your instance of the Report Portal.

Do not forget to install all the necessary dependencies:
```cmd
npm install
```

`npm install cucumber --no-save` - to install cucumber as a peer dependency. You can specify needed version by replacing `cucumber` with `cucumber@<version>`, for example, `cucumber@6`.

## Run the example

Then run npm tasks with `example:` prefix. For example, `example:simple`.

---
> Pay attention: you may change reporting behavior to report steps to the log level.\
> You need to pass an additional parameter to the agent config: "scenarioBasedStatistics": true\
> For more information check the link: [Step reporting configuration](https://github.com/reportportal/agent-js-cucumber#step-reporting-configuration)
