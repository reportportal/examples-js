Feature: statuses
  example: how to provide **statuses**

  Scenario: Provide custom statuses
    Given I want change PASSED step status to INFO
    Then I want change FAILED step status to PASSED
