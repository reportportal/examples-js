@attributeKey:attributeValue @attributeValue_2
Feature: descriptions
  example: how to provide **description**

  Scenario Outline: Given and expected value are equal
  This test contain `steps` with **description**

    When I put "<value>"
    Then I should compare it with "<answer>"

    Examples:
      | value | answer |
      | true  | true   |
      | true  | false  |
