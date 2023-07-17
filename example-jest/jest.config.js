module.exports = {
    testRunner: 'jest-circus/runner',
    testRegex: ['/__tests__/.*.spec.js?$'],
    reporters: [
        'default',
        [
            '@reportportal/agent-js-jest',
            {
                apiKey: '00000000-0000-0000-0000-000000000000',
                endpoint: 'https://your.reportportal.server/api/v1',
                launch: 'LAUNCH_NAME',
                project: 'PROJECT_NAME',
                description: 'YOUR_DESCRIPTION',
                attributes: [
                    {
                        'key': 'YourKey',
                        'value': 'YourValue'
                    },
                    {
                        'value': 'YourValue'
                    },
                ]
            }
        ]
    ],
};
