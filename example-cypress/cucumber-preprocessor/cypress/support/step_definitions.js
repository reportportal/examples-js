import { BeforeStep, AfterStep } from '@badeball/cypress-cucumber-preprocessor';

BeforeStep((step) => {
  cy.cucumberStepStart(step);
});

AfterStep((step) => {
  cy.cucumberStepEnd(step);
});
