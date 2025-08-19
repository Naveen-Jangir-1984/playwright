@sales
Feature: Opportunities

  @opporunities
  Scenario Outline: Create, Close and Delete an Opportunity
    Given user has logged in as "Admin"
    When user select application as "Sales"
    And user "creates" the account
      | Account Name |
      | Account      |
    And user "creates" the opportunity
      | Opportunity Name | Account Name | Close Date | Stage       |
      | Opportunity      | Account      | 12/31/2030 | Prospecting |
    And user changes the opportunity stage to "Qualification"
    And user changes the opportunity stage to "Needs Analysis"
    And user changes the opportunity stage to "Value Proposition"
    And user changes the opportunity stage to "Id. Decision Makers"
    And user changes the opportunity stage to "Perception Analysis"
    And user changes the opportunity stage to "Proposal/Price Quote"
    And user changes the opportunity stage to "Negotiation/Review"
    And user changes the opportunity stage to "<Stage>"
    And user "deletes" the opportunity
    And user "deletes" the account
    Then user has logged out

    Examples:
      | Stage       |
      | Closed Won  |
      | Closed Lost |