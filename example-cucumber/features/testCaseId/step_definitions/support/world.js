const cucumber = require('cucumber');
const { RPWorld } = require('@reportportal/agent-js-cucumber');

cucumber.setWorldConstructor(RPWorld);
