context('logs for tests and launch', () => {
  it('should have logs', () => {
    cy.log('cypress log message');
    cy.trace('trace message');
    cy.debug('debug message');
    cy.info('info message');
    cy.warn('warning message');
    cy.error('error message');
    cy.fatal('fatal message');

    cy.launchTrace('trace launch log');
    cy.launchDebug('debug launch log');
    cy.launchInfo('info launch log');
    cy.launchWarn('warn launch log');
    cy.launchError('error launch log');
    cy.launchFatal('fatal launch log');
    
    cy.fixture('test.png').then((file) => {
      cy.info('info log with attachment', {
        name: 'test.png',
        type: 'image/png',
        content: file,
      });
    });
  });
});
