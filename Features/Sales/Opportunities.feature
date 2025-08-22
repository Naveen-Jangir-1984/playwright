@sales
Feature: Opportunities

  @opporunities
  Scenario Outline: Create, Close and Delete an Opportunity
    Given user has logged in as "Admin"
    When user select application as "Sales"
    And user "creates" the "Account"
      | Account Name |
      | Account      |
    And user "creates" the "Opportunitie"
      | Opportunity Name | Account Name | Close Date | Stage       |
      | Opportunity      | Account      | 12/31/2030 | Prospecting |
    And user "modifies" the "Opportunitie"
      | Stage         |
      | Qualification |
    And user "modifies" the "Opportunitie"
      | Stage          |
      | Needs Analysis |
    And user "modifies" the "Opportunitie"
      | Stage             |
      | Value Proposition |
    And user "modifies" the "Opportunitie"
      | Stage               |
      | Id. Decision Makers |
    And user "modifies" the "Opportunitie"
      | Stage               |
      | Perception Analysis |
    And user "modifies" the "Opportunitie"
      | Stage                |
      | Proposal/Price Quote |
    And user "modifies" the "Opportunitie"
      | Stage              |
      | Negotiation/Review |
    And user "modifies" the "Opportunitie"
      | Stage   |
      | <Stage> |
    And user "deletes" the "Opportunitie"
    And user "deletes" the "Account"
    Then user has logged out

    Examples:
      | Stage       |
      | Closed Won  |
      | Closed Lost |