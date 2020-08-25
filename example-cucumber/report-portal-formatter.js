const { createRPFormatterClass } = require('@reportportal/agent-js-cucumber');
const rpConfig = require('./config/rpConfig');

module.exports = createRPFormatterClass(rpConfig);
