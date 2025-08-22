@sales
Feature: Leads

  @leads
  Scenario Outline: Create, Close and Delete a Lead
    Given user has logged in as "Admin"
    When user select application as "Sales"
    And user "creates" the "Lead"
      | Last Name | Company  |
      | Lastname  | ABC CORP |
    And user "modifies" the "Lead"
      | Lead Status         |
      | Working - Contacted |
    And user "modifies" the "Lead"
      | Lead Status |
      | <Status>    |
    And user "deletes" the "Lead"
    Then user has logged out

    Examples:
      | Status                 |
      | Closed - Converted     |
      | Closed - Not Converted |