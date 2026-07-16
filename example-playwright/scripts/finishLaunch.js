const RPClient = require('@reportportal/client-javascript');
const { config } = require('../rpConfigCi');

const client = new RPClient(config);

const finishLaunch = async () => {
  const launchTempId = client.startLaunch({ id: process.env.RP_LAUNCH_ID }).tempId;
  const response = await client.finishLaunch(launchTempId, {}).promise;

  return response;
};

module.exports = finishLaunch;
