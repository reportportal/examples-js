@attributeKey:attributeValue @attributeValue_2
Feature: logs
  example: how to provide **logs** for `launch` and `steps`

  Scenario Outline: Given and expected value are equal
  This test contain `steps` with **logs**

    Given I am preparing scenario
    When I put "<value>"
    Then I should compare it with "<answer>"

    Examples:
      | value | answer |
      | true  | true   |
