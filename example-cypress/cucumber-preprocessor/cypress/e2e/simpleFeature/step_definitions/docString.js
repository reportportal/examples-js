import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

let code = '';
let variableToVerify = '';

When('I use DocString for code like this:', (dataString) => {
  code = dataString;
});

Then('I ran it and verify that it executes it', () => {
  eval(code);
  expect(variableToVerify).to.equal('hello world');
});
