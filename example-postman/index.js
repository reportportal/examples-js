const newman = require('newman');

newman.run(
  {
    collection: './collections/Example.postman_collection.json',
    reporters: '@reportportal/agent-js-postman',
    reporter: {
      '@reportportal/agent-js-postman': {
        endpoint: 'http://your-instance.com:8080/api/v1',
        apiKey: '<API_KEY>',
        launch: 'Your launch name',
        project: 'Your reportportal project name',
        description: 'Your launch description',
        attributes: [
          {
            key: 'attributeKey',
            value: 'attrbuteValue',
          },
          {
            value: 'secondAttrbuteValue',
          },
        ],
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
  },
);
