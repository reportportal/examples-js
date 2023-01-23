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

context('Google example page verification', () => {
    beforeEach('Visit Google page', () => {
        return cy.visit('https://www.google.com/');
    });

    it('Check that Google page contains `Google` word', () => {
        cy.info('Сypress example page: https://www.google.com/');
        cy.setTestDescription('This test case checks the *Google* word on the Google example page.');
        cy.addTestAttributes([
            {
                key: 'page',
                value: 'Google',
            },
        ]);
        cy.wait(500);
        cy.info('Check if the `Google` word presented on the page #1');
        cy.contains('Google');
        cy.info('Check if the `Google` word presented on the page #2');
        cy.wait(500);
        cy.contains('Google');
        cy.info('Some checks performed!');
    });

    it('Check that Google page contains `Google123` word', () => {
        cy.info('Сypress example page: https://www.google.com/');
        cy.info('Add attributes to the test using `addTestAttributes` command');
        cy.setTestDescription('This test case checks the `Google123` word on the Google example page, but it fails.');
        cy.wait(500);
        cy.info('Add attributes to the test using `addTestAttributes` command');
        cy.addTestAttributes([
            {
                key: 'check',
                value: 'shouldFail',
            },
        ]);
        cy.warn('This test checks `Google123` word!');
        cy.wait(500);
        cy.info('Check if the `Google123` word presented on the page');
        cy.contains('Google123');
    });

    it('Check that Google page contains `Abrakadabra` word', () => {
        cy.setTestDescription('This test case checks the `Abrakadabra` word on the Google example page, but it fails.');
        cy.info('Visit Google example page: https://www.google.com/');
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
        cy.contains('Google123');
    });
});
