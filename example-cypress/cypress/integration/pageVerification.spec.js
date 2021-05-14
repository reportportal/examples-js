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

context('Cypress example page verification', () => {
    beforeEach('Visit Cypress page', () => {
        return cy.visit('https://example.cypress.io', { timeout: 10000 });
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

    it('Check that cypress page contains `Cypress123` word', () => {
        cy.info('Сypress example page: https://example.cypress.io');
        cy.info('Add attributes to the test using `addTestAttributes` command');
        cy.setTestDescription('This test case checks the `Cypress123` word on the cypress example page, but it fails.');
        cy.wait(500);
        cy.info('Add attributes to the test using `addTestAttributes` command');
        cy.addTestAttributes([
            {
                key: 'check',
                value: 'shouldFail',
            },
        ]);
        cy.warn('This test checks `Cypress123` word!');
        cy.wait(500);
        cy.info('Check if the `Cypress123` word presented on the page');
        cy.contains('Cypress123');
    });

    it('Check that cypress page contains `Abrakadabra` word', () => {
        cy.setTestDescription('This test case checks the `Abrakadabra` word on the cypress example page, but it fails.');
        cy.info('Visit cypress example page: https://example.cypress.io');
        cy.wait(500);
        cy.info('Add attributes to the test using `addTestAttributes` command');
        cy.addTestAttributes([
            {
                key: 'check',
                value: 'shouldFail',
            },
        ]);

        cy.warn('This test fails!');
        cy.wait(500);
        cy.info('Check if the `Abrakadabra` word presented on the page');
        cy.contains('Cypress123');
    });
});
