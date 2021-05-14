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
  beforeEach('Visit Cypress page', () => {
    return cy.visit('https://example.cypress.io', { timeout: 10000 });
  });
  it('should have status failed', () => {
    cy.setStatusFailed();
    cy.contains('Cypress');
  });

  it('should have status passed', () => {
    cy.setStatusPassed();
    cy.contains('gfkjdgkjdfgl');
  });

  it('should have status info', () => {
    cy.setStatusInfo();
    cy.contains('Cypress');
  });

  it('should have status warn', () => {
    cy.setStatusWarn();
    cy.contains('Cypress');
  });

  it('should have status skipped', () => {
    cy.setStatusSkipped();
    cy.contains('Cypress');
  });

  it('should have status stopped', () => {
    cy.setStatusStopped();
    cy.contains('Cypress');
  });

  it('should have status interrupted', () => {
    cy.setStatusInterrupted();
    cy.contains('Cypress');
  });

  it('should have status cancelled', () => {
    cy.setStatusCancelled();
    cy.contains('Cypress');
  });
});
