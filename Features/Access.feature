@access
Feature: Access

  @login
  Scenario: 01 - Login
    Given user has logged in as "Anita Jangir"
    Then user has logged out