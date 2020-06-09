context('attributes for test', () => {
  beforeEach('Visit Cypress page', () => {
    return cy.visit('https://example.cypress.io', { timeout: 10000 });
  });
  it('should contain attributes', () => {
    cy.addTestAttributes([
      {
        key: 'checkCypress',
        value: 'success',
      },
    ]);
    cy.addTestAttributes([
      {
        value: 'important',
      },
    ]);
    cy.contains('Cypress');
  });
});
