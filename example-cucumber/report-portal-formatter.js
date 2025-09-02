const { createRPFormatterClass } = require('@reportportal/agent-js-cucumber');

const rpConfig = {
  endpoint: 'http://your-instance.com:8080/api/v2',
  apiKey: '<API_KEY>',
  launch: 'Your launch name',
  project: 'Your reportportal project name',
  attributes: [
    {
      key: 'launchK',
      value: 'launchV'
    }
  ],
  description: 'Your launch name description',
};

module.exports = createRPFormatterClass(rpConfig);
