context('description for test', () => {
  beforeEach('Visit Cypress page', () => {
    return cy.visit('https://example.cypress.io', { timeout: 10000 });
  });
  it('should contain the description', () => {
    cy.setTestDescription('Test description');
    cy.setTestDescription('This description overwrites previous');
    cy.contains('Cypress');
  });
});
