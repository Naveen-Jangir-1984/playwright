@service
Feature: Cases

  @cases
  Scenario: Create, Escalate and Delete a case
    Given user has logged in as "Admin"
    When user select application as "Service"
    And user "creates" the "Account"
      | Account Name |
      | Account      |
    And user "creates" the "Case"
      | Account Name | Case Origin |
      | Account      | Phone       |
    And user "modifies" the "Case"
      | Status  |
      | Working |
    And user "modifies" the "Case"
      | Status    |
      | Escalated |
    And user "deletes" the "Case"
    And user "deletes" the "Account"
    Then user has logged out