Feature: Workflows

  @sales @leads
  Scenario: 01 - Create and Qualify a lead
    Given user has logged in as "Anita Jangir"
    When user select application as "Sales"
    And user "creates" a "lead" with below details
      | Last Name | Company  |
      | Jangir    | ABC CORP |
    And user changes the "Lead Status" to "Contacted"
    And user changes the "Lead Status" to "Nurturing"
    And user changes the "Lead Status" to "Qualified"
    Then user has logged out