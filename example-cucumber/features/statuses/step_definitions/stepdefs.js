
const assert = require('assert');
const { Before, When, Then } = require('@cucumber/cucumber');

Before('', function () {
  this.setLaunchStatusStopped();

  this.addDescription('Provide **STOPPED** status for launch');
})

When('I put {string}', function(givenValue) {
  this.setStatusFailed();
  this.addDescription('This step had a **PASSED** status, but was overwritten with an **FAILED** status');

  this.value = givenValue;
});

Then('I should compare it with {string}', function (expectedValue) {
  this.setStatusInterrupted();
  this.addDescription('This step had a **PASSED** status, but was overwritten with an **INTERRUPTED** status');

  assert.strictEqual(this.value, expectedValue);
});

