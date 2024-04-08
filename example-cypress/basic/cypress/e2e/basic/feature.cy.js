/*
 *  Copyright 2022 EPAM Systems
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

describe('Cypress example page verification', () => {
  beforeEach('Visit Cypress website', () => {
    return cy.visit('https://example.cypress.io');
  });

  it('Check the URL on the Cypress website', () => {
    cy.info('Add **ReportPortal** related *metadata* before starting main test actions.');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'clickable-area',
      },
      {
        value: 'demo',
      },
    ]);
    cy.setTestDescription('This test simply checks that *URL* contains `/commands/actions` on the **Cypress** website');

    cy.fixture('test.png').then((file) => {
      cy.info('info log with attachment', {
        name: 'test.png',
        type: 'image/png',
        content: file,
      });
    });

    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });

  it('Visits the Cypress website and type fake email on actions page', () => {
    cy.log('Add **ReportPortal** related *metadata* before starting main test actions.');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'action-email',
      },
      {
        value: 'demo',
      },
    ]);
    cy.setTestDescription('This test simply checks some `elements` on the **Cypress** website');

    cy.contains('type')
      .click();
    cy.get('.action-email')
      .type('fake@email.com');
    cy.screenshot('type-fake-email');
    cy.get('.action-email')
      .should('have.value', 'fake@email.com');
  })
})
