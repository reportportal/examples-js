const newman = require('newman');

newman.run(
  {
    collection: './collections/Example.postman_collection.json',
    reporters: '@reportportal/agent-js-postman',
    reporter: {
      '@reportportal/agent-js-postman': {
        endpoint: 'http://your-instance.com:8080/api/v1',
        token: '00000000-0000-0000-0000-000000000000',
        launch: 'LAUNCH_NAME',
        project: 'PROJECT_NAME',
        description: 'PROJECT_DESCRIPTION',
        attributes: [
          {
            key: 'attributeKey',
            value: 'attrbuteValue',
          },
          {
            value: 'secondAttrbuteValue',
          },
        ],
        debug: true,
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
  },
);
