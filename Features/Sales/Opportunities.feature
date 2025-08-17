@sales
Feature: Opportunities

  @opporunities
  Scenario Outline: Create, Close and Delete an Opportunity
    Given user has logged in as "Anita Jangir"
    When user select application as "Sales"
    And user "creates" the account
      | Account Name |
      | Account      |
    And user "creates" the opportunity
      | Opportunity Name | Account Name | Close Date | Stage   | Forecast Category |
      | Opportunity      | Account      | 31/12/2030 | Qualify | Pipeline          |
    And user changes the opportunity stage to "Meet & Present"
    And user changes the opportunity stage to "Propose"
    And user changes the opportunity stage to "Negotiate"
    And user changes the opportunity stage to "<Stage>"
    And user "deletes" the opportunity
    And user "deletes" the account
    Then user has logged out

    Examples:
      | Stage       |
      | Closed Won  |
      | Closed Lost |