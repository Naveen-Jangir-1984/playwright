@sales
Feature: Leads

  @leads
  Scenario Outline: Create, Qualify/Unqualify and Delete a Lead
    Given user has logged in as "Anita Jangir"
    When user select application as "Sales"
    And user "creates" the lead
      | Last Name | Company  |
      | Lastname  | ABC CORP |
    And user changes the lead status to "Contacted"
    And user changes the lead status to "Nurturing"
    And user changes the lead status to "<Status>"
    And user "deletes" the lead
    Then user has logged out

    Examples:
      | Status      |
      | Qualified   |
      | Unqualified |