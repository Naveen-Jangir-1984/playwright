@sales
Feature: Accounts

  @accounts
  Scenario: Create and Delete an account
    Given user has logged in as "Anita Jangir"
    When user select application as "Sales"
    And user "creates" the account
      | Account Name |
      | Account      |
    And user "deletes" the account
    Then user has logged out