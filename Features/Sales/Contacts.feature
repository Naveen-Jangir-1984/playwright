@sales
Feature: Contacts

  @contacts
  Scenario: 01 - Create and Delete an contact
    Given user has logged in as "Anita Jangir"
    When user select application as "Sales"
    And user "creates" the account
      | Account Name |
      | Account      |
    And user "creates" the contact
      | Last Name | Account Name |
      | Lastname  | Account      |
    And user "deletes" the contact
    And user "deletes" the account
    Then user has logged out