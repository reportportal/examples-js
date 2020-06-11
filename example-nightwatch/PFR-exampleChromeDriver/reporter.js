const { PostFactumReporter } = require('@reportportal/agent-js-nightwatch');
const config = require('../rp');
const params = require('./params');

const agent = new PostFactumReporter({ ...config, ...params });

module.exports = {
  write: (results, options, done) => {
    return agent.startReporting(results, done);
  },
};
