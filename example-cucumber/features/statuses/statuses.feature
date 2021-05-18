@attributeKey:attributeValue @attributeValue_2
Feature: statuses
  example: how to set custom **status** for `launch` and `steps`

  Scenario Outline: Given and expected value are equal
  This test contain `launch` and `steps` with different **statuses**

    When I put "<value>"
    Then I should compare it with "<answer>"

    Examples:
      | value | answer |
      | true  | true   |
