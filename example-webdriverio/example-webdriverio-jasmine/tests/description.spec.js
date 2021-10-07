const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

describe('Set description to the test', () => {
  ReportingApi.setDescription('Description from the test file', 'Set description to the test');

  it('Check title', async () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'description',
    }]);
    ReportingApi.setDescription('Description from the test file');
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();

    expect(title).toBe(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });
});
