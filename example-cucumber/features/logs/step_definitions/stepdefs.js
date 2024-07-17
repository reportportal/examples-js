const assert = require('assert');
const { After, Before, Given, When, Then } = require('@cucumber/cucumber');

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

  this.addDescription('This step contains **logs**');
});

After(function() {
  this.fatal('After fatal log');
  this.error('After error log');
  this.warn('After warn log');
  this.info('After info log');
  this.debug('After debug log');
  this.trace('After trace log');

  this.addDescription('This step contains **logs**');
});

Given('I am preparing scenario', function() {
  this.scenarioInfo('This is Info Level log');
  this.scenarioDebug('This is Debug Level log');
  this.scenarioError('This is Error Level log');
  this.scenarioWarn('This is Warn Level log');
  this.scenarioTrace('This is Trace Level log');
  this.scenarioFatal('This is Fatal Level log');

  this.addScenarioDescription('This scenario contains **logs**');
});

When('I put {string}', function(givenValue) {
  this.fatal('Step fatal log');
  this.error('Step error log');
  this.warn('Step warn log');
  this.info('Step info log');
  this.debug('Step debug log');
  this.trace('Step trace log');

  this.addDescription('This step contains **logs**');

  this.value = givenValue;
});

Then('I should compare it with {string}', function (expectedValue) {
  this.fatal('Step fatal log');
  this.error('Step error log');
  this.warn('Step warn log');
  this.info('Step info log');
  this.debug('Step debug log');
  this.trace('Step trace log');

  this.addDescription('This step contains **logs**');

  assert.strictEqual(this.value, expectedValue);
});

