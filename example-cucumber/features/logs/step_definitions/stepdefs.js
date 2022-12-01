const assert = require('assert');
const { After, Before, When, Then } = require('@cucumber/cucumber');

Before(function() {
  this.fatal('Before fatal log');
  this.error('Before error log');
  this.warn('Before warn log');
  this.info('Before info log');
  this.debug('Before debug log');
  this.trace('Before trace log');

  this.launchFatal('This is a fatal launch log');
  this.launchError('This is a error launch log');
  this.launchWarn('This is a warn launch log');
  this.launchInfo('This is a info launch log');
  this.launchDebug('This is a debug launch log');
  this.launchTrace('This is a trace launch log');

  this.addDescription('This step contain **logs**');
});

After(function() {
  this.fatal('After fatal log');
  this.error('After error log');
  this.warn('After warn log');
  this.info('After info log');
  this.debug('After debug log');
  this.trace('After trace log');

  this.addDescription('This step contain **logs**');
});

When('I put {string}', function(givenValue) {
  this.fatal('Step fatal log');
  this.error('Step error log');
  this.warn('Step warn log');
  this.info('Step info log');
  this.debug('Step debug log');
  this.trace('Step trace log');

  this.addDescription('This step contain **logs**');

  this.value = givenValue;
});

Then('I should compare it with {string}', function (expectedValue) {
  this.fatal('Step fatal log');
  this.error('Step error log');
  this.warn('Step warn log');
  this.info('Step info log');
  this.debug('Step debug log');
  this.trace('Step trace log');

  this.addDescription('This step contain **logs**');

  assert.strictEqual(this.value, expectedValue);
});

