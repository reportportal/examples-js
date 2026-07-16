@custom:attribute @value
Feature: Attributes
  example: How to provide **attributes**

  @scenario:equal @demo
  Scenario: Given and expected value are equal
    Description for **scenario**

    Given I put "true"
    Then I should compare it with "false"
