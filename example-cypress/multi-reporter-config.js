module.exports = {
  reporterEnabled: ['cypress-parallel/json-stream.reporter.js', '@reportportal/agent-js-cypress'],
  reportportalAgentJsCypressReporterOptions: {
    endpoint: 'http://your-instance.com:8080/api/v1',
    token: '00000000-0000-0000-0000-000000000000',
    launch: 'LAUNCH_NAME',
    project: 'PROJECT_NAME',
    description: 'LAUNCH_DESCRIPTION',
    isLaunchMergeRequired: true,
    attributes: [
      {
        key: 'attributeKey',
        value: 'attrbiuteValue',
      },
      {
        value: 'secondAttrbiuteValue',
      },
    ],
    restClientConfig: {
      timeout: 0,
    },
  }
};
