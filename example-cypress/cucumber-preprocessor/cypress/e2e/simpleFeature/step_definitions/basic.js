import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('a feature and a matching step definition file', () => {
  expect(true).to.equal(true);
});

When('I run cypress tests', () => {
  cy.info('test log');
  expect(true).to.equal(true);
});

Then('they run properly', () => {
  expect(true).to.equal(true);
});
