context('populated statuses for launch/test', () => {
  beforeEach('Visit Cypress page', () => {
    return cy.visit('https://example.cypress.io', { timeout: 10000 });
  });
  it('should have status failed', () => {
    cy.setLaunchStatusInfo();
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
