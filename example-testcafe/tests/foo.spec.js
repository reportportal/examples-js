import { Selector } from 'testcafe';
import { ReportingApi } from 'testcafe-reporter-agent-js-testcafe/build/reportingApi';

fixture`Getting Started with statuses`.page`http://devexpress.github.io/testcafe/example`
  .before(() => {
    ReportingApi.setLaunchStatusCancelled();
    ReportingApi.setStatusInterrupted();
  })
  .meta({
    description: 'This suite contains tests to demonstrate custom statuses reporting via agent-js-testcafe',
    attributes: [{ key: 'feature', value: 'customStatus' }, { value: 'demo' }],
  });

test('My first test', async (page) => {
  ReportingApi.setStatusInfo();
  await page
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('#article-header').innerText)
    .eql('Thank you, John Smith!');
}).meta({
  description: 'This test contains demonstrates custom statuses reporting via agent-js-testcafe',
  attributes: [{ key: 'feature', value: 'customStatus' }, { value: 'demo' }],
});

fixture`The next fixture about predefined values`.page`http://devexpress.github.io/testcafe/example`.meta({
  description: 'This suite contains tests to demonstrate predefined attributes reporting via agent-js-testcafe',
  attributes: [{ key: 'feature', value: 'predefinedAttributes' }, { value: 'demo' }],
});

test('Should fail with error', async (page) => {
  await page
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')

    .expect(Selector('#article-header').innerText)
    .eql('Thank you, Baraka Omaba!');
}).meta({
  description: 'second test description',
  attributes: [{ key: 'feature', value: 'predefinedAttributes' }, { value: 'demo' }],
});
