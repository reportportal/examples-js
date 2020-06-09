/*
 *  Copyright 2020 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const PublicReportingAPI = require('@reportportal/agent-js-jasmine/lib/publicReportingAPI');

describe('logs for launch/suite/test', function() {
    PublicReportingAPI.launchLog('INFO', 'info launch log, logs for launch/suite/test');
    PublicReportingAPI.launchInfo('info launch log');
    PublicReportingAPI.launchDebug('debug launch log');
    PublicReportingAPI.launchTrace('trace launch log');
    PublicReportingAPI.launchWarn('warn launch log');
    PublicReportingAPI.launchError('error launch log');
    PublicReportingAPI.launchFatal('fatal launch log');
    PublicReportingAPI.debug('debug log, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.info('debug log, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.trace('trace log, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.warn('warning, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.error('error log, testGithubPage', null, 'logs for launch/suite/test');
    PublicReportingAPI.fatal('fatal log, testGithubPage',null,  'logs for launch/suite/test');

    it('should have the logs', function() {
        PublicReportingAPI.debug('debug log');
        PublicReportingAPI.trace('trace log');
        PublicReportingAPI.warn('warning');
        PublicReportingAPI.error('error log');
        PublicReportingAPI.fatal('fatal log');
        expect(true).toBe(true);
    });
});
