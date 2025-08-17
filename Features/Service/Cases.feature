@service
Feature: Cases

  @cases
  Scenario: Create, Close and Delete a case
    Given user has logged in as "Anita Jangir"
    When user select application as "Service"
    And user "creates" the account
      | Account Name |
      | Account      |
    And user "creates" the case
      | Account Name |
      | Account      |
    And user changes the case status to "Working"
    And user changes the case status to "Waiting on Customer"
    And user changes the case status to "Escalated"
    And user changes the case status to "Closed"
    And user "deletes" the case
    And user "deletes" the account
    Then user has logged out