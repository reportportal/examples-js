const {ReportingApi}  = require('@reportportal/agent-js-webdriverio');

describe('Suite', () => {
  it('Test should be STOPPED instead of PASSED', async () => {
    ReportingApi.addAttributes([{
      key: 'feature',
      value: 'explicitStatus',
    }]);
    ReportingApi.setStatusStopped();
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();

    expect(title).toBe(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });

  xit('Test should be SKIPPED', async () => {
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();

    expect(title).toBe(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });

  it('Test should be FAILED', async () => {
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();
    await browser.saveScreenshot('./screenshots/screenshot.png');

    expect(title).toBe(
      'WebdriverIO',
    );
  });

  describe('should be type:TEST', () => {
    it('test should be FAILED', () => {
      expect(true).toBe(false);
    });
  });
});
