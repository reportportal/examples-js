@custom:attribute @value
Feature: attributes
  example: how to provide **attributes**

  Scenario: Given and expected value are equal
    Given I put "true"
    Then I should compare it with "false"
