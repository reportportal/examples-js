const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

describe('Manual status attaching. Suite with STOPPED status', () => {
  ReportingApi.addAttributes([{
    key: 'feature',
    value: 'explicitStatuses',
  }]);
  ReportingApi.setLaunchStatusInterrupted();
  ReportingApi.setStatusStopped('Manual status attaching. Suite with STOPPED status');

  it('Test with PASSED status', () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'explicitStatus',
    }]);
    ReportingApi.setStatusPassed();

    expect(true).toBe(false);
  });

  it('Test with FAILED status', () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'explicitStatus',
    }]);
    ReportingApi.setStatusFailed();

    expect(true).toBe(true);
  });

  it('Test with SKIPPED status', () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'explicitStatus',
    }]);
    ReportingApi.setStatusSkipped();

    expect(true).toBe(true);
  });

  it('Test with STOPPED status', () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'explicitStatus',
    }]);
    ReportingApi.setStatusStopped();

    expect(true).toBe(true);
  });

  it('Test with INTERRUPTED status', () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'explicitStatus',
    }]);
    ReportingApi.setStatusInterrupted();

    expect(true).toBe(true);
  });

  it('Test with CANCELLED status', () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'explicitStatus',
    }]);
    ReportingApi.setStatusCancelled();

    expect(true).toBe(true);
  });
});
