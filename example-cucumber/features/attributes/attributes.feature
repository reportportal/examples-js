@attributeKey:attributeValue @attributeValue_2
Feature: attributes
  example: how to set custom **attributes** for `suite` and `steps`

  Scenario Outline: Given and expected value are equal
  This test contain `steps` with **attributes**

    When I put "<value>"
    Then I should compare it with "<answer>"

    Examples:
      | value | answer |
      | true  | true   |
