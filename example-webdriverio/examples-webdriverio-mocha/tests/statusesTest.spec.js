/*
 *  Copyright 2023 EPAM Systems
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
const expect = require('chai').expect;
const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

describe('populated statuses for launch/suite/test', () => {
  before(() => {
    ReportingApi.setLaunchStatusInfo();
    ReportingApi.setStatusInfo();
  });

  it('should have status passed', () => {
    ReportingApi.setDescription('This test should have manually provided `Passed` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusPassed',
      },
    ]);
    ReportingApi.setStatusPassed();
    expect(true).to.be.false;
  });

  it('should have status failed', () => {
    ReportingApi.setDescription('This test should have manually provided `Failed` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusFailed',
      },
    ]);
    ReportingApi.setStatusFailed();
    expect(true).to.be.true;
  });

  it('should have status info', () => {
    ReportingApi.setDescription('This test should have manually provided `Info` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusInfo',
      },
    ]);
    ReportingApi.setStatusInfo();
    expect(true).to.be.true;
  });

  it('should have the status warn', () => {
    ReportingApi.setDescription('This test should have manually provided `Warn` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusWarn',
      },
    ]);
    ReportingApi.setStatusWarn();
    expect(true).to.be.true;
  });

  it('should have the status cancelled', () => {
    ReportingApi.setDescription('This test should have manually provided `Cancelled` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusCancelled',
      },
    ]);
    ReportingApi.setStatusCancelled();
    expect(true).to.be.true;
  });

  it('should have the status interrupted', () => {
    ReportingApi.setDescription('This test should have manually provided `Interrupted` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusInterrupted',
      },
    ]);
    ReportingApi.setStatusInterrupted();
    expect(true).to.be.true;
  });

  it('should have the status skipped', () => {
    ReportingApi.setDescription('This test should have manually provided `Skipped` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusSkipped',
      },
    ]);
    ReportingApi.setStatusSkipped();
    expect(true).to.be.true;
  });

  it('should have the status stopped', () => {
    ReportingApi.setDescription('This test should have manually provided `Stopped` status');
    ReportingApi.addAttributes([
      {
        key: 'feature',
        value: 'manualStatusStopped',
      },
    ]);
    ReportingApi.setStatusStopped();
    expect(true).to.be.true;
  });
});
