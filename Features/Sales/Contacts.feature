@sales
Feature: Contacts

  @contacts
  Scenario: Create and Delete a Contact
    Given user has logged in as "Admin"
    When user select application as "Sales"
    And user "creates" the "Account"
      | Account Name |
      | Account      |
    And user "creates" the "Contact"
      | Last Name | Account Name |
      | Lastname  | Account      |
    And user "deletes" the "Contact"
    And user "deletes" the "Account"
    Then user has logged out