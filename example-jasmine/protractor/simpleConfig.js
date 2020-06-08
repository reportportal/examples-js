const ReportportalAgent = require('@reportportal/agent-js-jasmine');
const reportportalConfig = require('../reportportalConf');
let agent;

exports.config = {
    specs: ['../tests/*.spec.js'],
    onPrepare(){
        agent = new ReportportalAgent(reportportalConfig);

        jasmine.getEnv().addReporter(agent.getJasmineReporter());
    },
    afterLaunch(number) {
        return agent.getExitPromise();
    },
};
