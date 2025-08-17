@sales
Feature: Opportunities

  @opporunities
  Scenario: 01 - Create and Delete an opportunity
    Given user has logged in as "Anita Jangir"
    When user select application as "Sales"
    And user "creates" the account
      | Account Name |
      | Account      |
    And user "creates" the opportunity
      | Opportunity Name | Account Name | Close Date | Stage   | Forecast Category |
      | Opportunity      | Account      | 31/12/2030 | Qualify | Pipeline          |
    And user "deletes" the opportunity
    And user "deletes" the account
    Then user has logged out