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

context('Awesome suite', () => {
    beforeEach('Visit Cypress page', () => {
        return cy.visit('https://example.cypress.io', { timeout: 10000 });
    });
    it('should check the `Cypress123` word', () => {
        cy.info('Visit cypress example page: https://example.cypress.io');
        cy.setTestDescription('This test case contains explicit test case id');

        cy.contains('Cypress');
        cy.wait(1000);
        cy.addTestAttributes([
            {
                key: 'feature',
                value: 'ExplicitTestCaseId',
            },
        ]);
        cy.info('Use timeout 1000ms');
        cy.wait(1000);
        cy.info('Set testCaseId to the test using `setTestCaseId` command');
        cy.setTestCaseId('testCaseIDForTheTest');
        cy.info('Use timeout 1000ms');
        cy.wait(1000);
        cy.contains('Cypress123');
    });

    it('Gets, types and asserts', () => {
        cy.info('Visit cypress example page: https://example.cypress.io');
        cy.visit('https://example.cypress.io');
        cy.info('Add attributes to the test using `addTestAttributes` command');
        cy.setTestDescription('This test case contains automatically generated test case id');
        cy.addTestAttributes([
            {
                key: 'feature',
                value: 'AutoGeneratedTestCaseId',
            },
        ]);

        cy.info('Clicks on the type');
        cy.contains('type').click();
        cy.wait(500);
        cy.info('Use timeout 500ms');
        cy.info(`Should be on a new URL which includes '/commands/actions'`);
        cy.url().should('include', '/commands/actions');
        cy.info('Use timeout 1000ms');
        cy.wait(1000);

        cy.info('Get an input, type into it and verify that the value has been updated');
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
        cy.info('Some checks performed!');
    });
});
