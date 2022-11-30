const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');

When('I put {string}', function(givenValue) {
  this.setTestCaseId('testCaseId');
  this.addDescription('This step with **testCaseID=testCaseId**');

  this.value = givenValue;
});

Then('I should compare it with {string}', function (expectedValue) {
  this.setTestCaseId('testCaseId_2');
  this.addDescription('This step with **testCaseID=testCaseId_2**');

  assert.strictEqual(this.value, expectedValue);
});

