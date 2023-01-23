const fs = require('fs');
const glob = require('glob');
const { mergeLaunches: mergeRpLaunches } = require('@reportportal/agent-js-cypress/lib/mergeLaunches');
const reportersConfig = require('./multi-reporter-config');

const rpConfig = reportersConfig.reportportalAgentJsCypressReporterOptions;

const getLaunchTempFiles = () => {
  return glob.sync('rplaunch-*.tmp');
};

const deleteTempFile = (filename) => {
  fs.unlinkSync(filename);
};

async function mergeReportPortalLaunches(rpConfig) {
  let processExitCode = 0;

  try {
    await mergeRpLaunches(rpConfig);
    console.log('Launches successfully merged!');
  } catch (error) {
    processExitCode = 1;
    console.error(error);
  } finally {
    const files = getLaunchTempFiles();
    files.forEach(deleteTempFile);
  }

  process.exit(processExitCode);
}

mergeReportPortalLaunches();
