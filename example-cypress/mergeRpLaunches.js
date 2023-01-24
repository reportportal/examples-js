const fs = require('fs');
const glob = require('glob');
const { mergeLaunches } = require('@reportportal/agent-js-cypress/lib/mergeLaunches');
const reportersConfig = require('./multi-reporter-config');

const rpConfig = reportersConfig.reportportalAgentJsCypressReporterOptions;

const getLaunchTempFiles = () => {
  return glob.sync('rplaunch-*.tmp');
};

const deleteTempFile = (filename) => {
  fs.unlinkSync(filename);
};

async function mergeReportPortalLaunches() {
  try {
    await mergeLaunches(rpConfig);
    console.log('Launches successfully merged!');
  } catch (error) {
    console.error(error);
  } finally {
    const files = getLaunchTempFiles();
    files.forEach(deleteTempFile);
  }
}

mergeReportPortalLaunches();
