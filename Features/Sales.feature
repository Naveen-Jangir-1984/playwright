@sales
Feature: Sales

  @leads
  Scenario: 01 - Create, Qualify and Delete a lead
    Given user has logged in as "Anita Jangir"
    When user select application as "Sales"
    And user "creates" the lead
      | Last Name | Company  |
      | Lastname  | ABC CORP |
    And user changes the lead status to "Contacted"
    And user changes the lead status to "Nurturing"
    And user changes the lead status to "Qualified"
    And user "deletes" the lead
    Then user has logged out