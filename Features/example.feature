Feature: Login feature

  @test
  Scenario: #1 Standard User
    Given user login as "StandardUser"
    Then user should see the inventory title

  Scenario: #2 Problem User
    Given user login as "ProblemUser"
    Then user should see the inventory title

  Scenario: #3 Locked User
    Given user login as "LockedUser"
    Then user should see the inventory title
