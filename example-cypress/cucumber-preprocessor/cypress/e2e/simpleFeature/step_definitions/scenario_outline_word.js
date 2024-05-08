import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('a list of phones on phones store', () => {
  expect(true).to.equal(true);
});

When('I search the phone {word} in search input', () => {
  expect(true).to.equal(true);
});

Then('{word} {word} appears on the screen', (brand, model) => {
  cy.info(`model=${model} brand=${brand}`);
  expect(typeof model).to.equal('string');
  expect(typeof brand).to.equal('string');
});
