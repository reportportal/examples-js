import { BeforeStep, Before } from '@badeball/cypress-cucumber-preprocessor';

const pickleArray = [];

/**
 Hook to collect steps info to array
 */
BeforeStep(function (pickle) {
  pickleArray.push(pickle);
});

/**
 Hook to flush steps array between tests
 */
Before(function () {
  pickleArray.length = 0;
});

/**
 * Hook for sending execution results to the Report Portal
 */
afterEach(() => {
  for (const pickle of pickleArray) {
    cy.logStep(pickle);
  }
});
