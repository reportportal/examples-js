const assert = require('assert');
const {When, Then} = require('cucumber');

When('I put {string}', function (givenValue) {
  this.addAttributes([{key: 'key_1', value: 'value_1'}, {value: 'value_1'}]);
  this.addDescription('This step contain **attributes**');

  this.value = givenValue;
});

Then('I should compare it with {string}', function (expectedValue) {
  this.addAttributes([{key: 'key_2', value: 'value_2'}, {value: 'value_2'}]);
  this.addDescription('This step contain **attributes**');

  assert.strictEqual(this.value, expectedValue);
});
