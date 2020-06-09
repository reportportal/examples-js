context('testCaseId for the test', () => {
  beforeEach('Visit Cypress page', () => {
    return cy.visit('https://example.cypress.io', { timeout: 10000 });
  });
  it('should have correct test case id', () => {
    cy.contains('Cypress');
    cy.setTestCaseId('testCaseIDForTheTest');
  });
});
