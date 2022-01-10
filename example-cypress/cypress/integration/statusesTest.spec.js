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

 context('populated statuses for launch/test', () => {
  beforeEach('Visit Google page', () => {
    return cy.visit('https://www.google.com/');
  });
  it('should have status failed', () => {
    cy.setTestDescription('This test should have manually provided `Failed` status');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'manualStatusFailed',
      },
    ]);
    cy.setStatusFailed();
    cy.contains('Google');
  });

  it('should have status passed', () => {
    cy.setTestDescription('This test should have manually provided `Passed` status');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'manualStatusPassed',
      },
    ]);
    cy.setStatusPassed();
    cy.contains('gfkjdgkjdfgl');
  });

  it('should have status skipped', () => {
    cy.setTestDescription('This test should have manually provided `Skipped` status');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'manualStatusSkipped',
      },
    ]);
    cy.setStatusSkipped();
    cy.contains('Google');
  });

  it('should have status stopped', () => {
    cy.setTestDescription('This test should have manually provided `Stopped` status');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'manualStatusStopped',
      },
    ]);
    cy.setStatusStopped();
    cy.contains('Google');
  });

  it('should have status interrupted', () => {
    cy.setTestDescription('This test should have manually provided `Interrupted` status');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'manualStatusInterrupted',
      },
    ]);
    cy.setStatusInterrupted();
    cy.contains('Google');
  });

  it('should have status cancelled', () => {
    cy.setTestDescription('This test should have manually provided `Cancelled` status');
    cy.addTestAttributes([
      {
        key: 'feature',
        value: 'manualStatusCancelled',
      },
    ]);
    cy.setStatusCancelled();
    cy.contains('Google');
  });
});
