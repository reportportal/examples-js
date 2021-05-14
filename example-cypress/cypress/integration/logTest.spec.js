/*
 *  Copyright 2020 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

context('Logs for tests and launch', () => {
  it('should send logs to the launch', () => {
    cy.setTestDescription('This test sends logs with different levels to the launch');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'launchLogs',
      },
    ]);
    cy.launchTrace('trace launch log');
    cy.launchDebug('debug launch log');
    cy.launchInfo('info launch log');
    cy.launchWarn('warn launch log');
    cy.launchError('error launch log');
    cy.launchFatal('fatal launch log');
  });

  it('should send logs to the test item', () => {
    cy.setTestDescription('This test sends logs with different levels to the test item');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'testItemLogs',
      },
    ]);
    cy.log('cypress log message');
    cy.trace('trace message');
    cy.debug('debug message');
    cy.info('info message');
    cy.warn('warning message');
    cy.error('error message');
    cy.fatal('fatal message');

    cy.fixture('test.png').then((file) => {
      cy.info('info log with attachment', {
        name: 'test.png',
        type: 'image/png',
        content: file,
      });
    });
  });

  it('Check that cypress page contains `Cypress` word', () => {
    cy.info('Сypress example page: https://example.cypress.io');
    cy.setTestDescription('This test case checks the *Cypress* word on the cypress example page.');
    cy.addTestAttributes([
      {
        key: 'page',
        value: 'cypress',
      },
    ]);
    cy.wait(500);
    cy.info('Check if the `Cypress` word presented on the page #1');
    cy.contains('Cypress');
    cy.info('Check if the `Cypress` word presented on the page #2');
    cy.wait(500);
    cy.contains('Cypress');
    cy.info('Some checks performed!');
  });
});
