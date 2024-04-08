import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

let sum = 0;

When('I add {int} and {int}', (a, b) => {
  sum = a + b;
});

Then('I verify that the result is equal the {int}', (result) => {
  expect(sum).to.equal(result);
});
