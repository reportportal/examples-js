module.exports = {
    testRunner: 'jest-circus/runner',
    testRegex: ['/__tests__/.*.spec.js?$'],
    reporters: [
        'default',
        [
            '@reportportal/agent-js-jest',
            {
                apiKey: '<API_KEY>',
                endpoint: 'https://your.reportportal.server/api/v1',
                launch: 'LAUNCH_NAME',
                project: 'PROJECT_NAME',
                description: 'YOUR_DESCRIPTION',
                debug: true,
                attributes: [
                    {
                        'key': 'test-framework',
                        'value': 'jest'
                    },
                    {
                        'value': 'YourValue'
                    },
                ],
                restClientConfig:{
                  timeout: 0,
                }
            }
        ]
    ],
};
