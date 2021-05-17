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

describe('populated statuses for launch/test', function () {
  PublicReportingAPI.setLaunchStatusInfo();
  PublicReportingAPI.setStatusInfo('populated statuses for launch/test');

  it('should have status passed', function () {
    PublicReportingAPI.setDescription('This test should have manually provided `Passed` status');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusPassed',
      },
    ]);
    PublicReportingAPI.setStatusPassed();
    expect(true).toBe(false);
  });

  it('should have status failed', function () {
    PublicReportingAPI.setDescription('This test should have manually provided `Failed` status');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusFailed',
      },
    ]);
    PublicReportingAPI.setStatusFailed();
    expect(true).toBe(true);
  });

  it('should have status info', function () {
    PublicReportingAPI.setDescription('This test should have manually provided `Info` status');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusInfo',
      },
    ]);
    PublicReportingAPI.setStatusInfo();
    expect(true).toBe(true);
  });

  it('should have status warn', function () {
    PublicReportingAPI.setDescription('This test should have manually provided `Warn` status');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusWarn',
      },
    ]);
    PublicReportingAPI.setStatusWarn();
    expect(true).toBe(true);
  });

  it('should have status cancelled', function () {
    PublicReportingAPI.setDescription('This test should have manually provided `Cancelled` status');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusCancelled',
      },
    ]);
    PublicReportingAPI.setStatusCancelled();
    expect(true).toBe(true);
  });

  it('should have status interrupted', function () {
    PublicReportingAPI.setDescription(
      'This test should have manually provided `Interrupted` status',
    );
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusInterrupted',
      },
    ]);
    PublicReportingAPI.setStatusInterrupted();
    expect(true).toBe(true);
  });

  it('should have status skipped', function () {
    PublicReportingAPI.setDescription('This test should have manually provided `Skipped` status');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusSkipped',
      },
    ]);
    PublicReportingAPI.setStatusSkipped();
    expect(true).toBe(true);
  });

  it('should have status stopped', function () {
    PublicReportingAPI.setDescription('This test should have manually provided `Stopped` status');
    PublicReportingAPI.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusStopped',
      },
    ]);
    PublicReportingAPI.setStatusStopped();
    expect(true).toBe(true);
  });
});
