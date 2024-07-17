const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');

When('I put {string}', function (givenValue) {
  this.addAttributes([ { key: 'feature', value: 'attributes' }, { value: 'cucumberStep' }]);
  this.addDescription('This step contain **attributes**');

  this.addScenarioAttributes([{ key: 'feature', value: 'attributes' }, { value: 'cucumberScenario' }]);
  this.addScenarioDescription('Additional description for **scenario**');

  this.value = givenValue;
});

Then('I should compare it with {string}', function (expectedValue) {
  this.addAttributes([{ key: 'feature', value: 'attributes' }, { value: 'cucumberStep' }]);
  this.addDescription('This step contain **attributes**');

  assert.strictEqual(this.value, expectedValue);
});
