const assert = require('assert');
const {After, Before, When, Then} = require('@cucumber/cucumber');

Before(function () {
  this.addDescription('This is a **description** for `before step`');
});

After(function () {
  this.addDescription('This is a **description** for `after step`');
});

When('I put {string}', function (givenValue) {
  this.addAttributes([{
    key: 'key',
    value: 'value'
  }])
  this.value = givenValue;
  this.addDescription('This is a **description** for `when step`');
});

Then('I should compare it with {string}', function (expectedValue) {
  this.addDescription('This is a **description** for `then step`');
  assert.strictEqual(this.value, expectedValue);
});

