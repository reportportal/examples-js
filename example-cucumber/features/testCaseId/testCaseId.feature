@attributeKey:attributeValue @attributeValue_2
Feature: testCaseId
  example: how to set custom **testCaseId** for `steps`

  Scenario Outline: Given and expected value are equal
  This test contain `steps` with **testCaseId**

    When I put "<value>"
    Then I should compare it with "<answer>"

    Examples:
      | value | answer |
      | true  | true   |
