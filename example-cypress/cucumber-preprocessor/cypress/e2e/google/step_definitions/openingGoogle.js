import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

const url = 'https://google.com';

Given(`I open Google page`, () => {
  cy.setTestDescription('This test case checks the *Google* word on the Google example page.');
  cy.addTestAttributes([
    {
      key: 'page',
      value: 'Google',
    },
  ]);
  cy.visit(url);
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title);
});
