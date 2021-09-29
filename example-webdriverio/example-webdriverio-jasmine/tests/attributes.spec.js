const { ReportingApi } = require('@reportportal/agent-js-webdriverio');

describe('Provide attributes to the test', () => {
  ReportingApi.addAttributes(
    [
      {
        key: 'runner',
        value: 'jasmine',
      },
      {
        value: 'suite_attribute',
      },
    ],
    'Provide attributes to the test',
  );

  it('Step with custom attributes', async () => {
    ReportingApi.addAttributes(
      [
        {
          key: 'check',
          value: 'attributes',
        },
        {
          value: 'custom_attribute',
        },
      ],
    );
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();

    expect(title).toBe(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });
});
