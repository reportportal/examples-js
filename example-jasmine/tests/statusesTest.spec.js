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

describe('populated statuses for launch/suite/test', function() {
    PublicReportingAPI.setLaunchStatusInfo();
    PublicReportingAPI.setStatusInfo('tests with populated statuses');

    it('should have the status passed', function() {
        PublicReportingAPI.setStatusPassed();
        expect(true).toBe(false);
    });

    it('should have the status failed', function() {
        PublicReportingAPI.setStatusFailed();
        expect(true).toBe(true);
    });

    it('should have the status info', function() {
        PublicReportingAPI.setStatusInfo();
        expect(true).toBe(true);
    });

    it('should have the status warn', function() {
        PublicReportingAPI.setStatusWarn();
        expect(true).toBe(true);
    });

    it('should have the status cancelled', function() {
        PublicReportingAPI.setStatusCancelled();
        expect(true).toBe(true);
    });

    it('should have the status interrupted', function() {
        PublicReportingAPI.setStatusInterrupted();
        expect(true).toBe(true);
    });

    it('should have the status skipped', function() {
        PublicReportingAPI.setStatusSkipped();
        expect(true).toBe(true);
    });

    it('should have the status stopped', function() {
        PublicReportingAPI.setStatusStopped();
        expect(true).toBe(true);
    });
});
