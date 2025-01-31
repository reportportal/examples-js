const RPClient = require('@reportportal/client-javascript');
const { config } = require('../rpConfigCi');

const client = new RPClient(config);

const startLaunch = async () => {
  const { mode, launch, attributes, description } = config;
  const response = await client.startLaunch({ name: launch, mode, attributes, description }).promise;
  const launchId = response.id;

  return launchId;
};

module.exports = startLaunch;
