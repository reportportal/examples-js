const cucumber = require('@cucumber/cucumber');
const { RPWorld } = require('@reportportal/agent-js-cucumber');

cucumber.setWorldConstructor(RPWorld);
