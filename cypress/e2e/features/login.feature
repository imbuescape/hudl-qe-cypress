Feature: User Authentication


  Background:
    Given I am on the Hudl login page

  Scenario: Successful login with valid credentials
    When I login with valid credentials
    Then I should be redirected to the dashboard

  Scenario: Failed login with malformed email
    When I attempt to login with malformed email
    Then I should see invalid error message "Enter a valid email"  

  Scenario Outline: Failed login with invalid credentials
    When I attempt to login with "<username>" and "<password>"
    Then I should see an error message "<error>"

    Examples:
      | username                | password         | error                                           |
      | valid_user              | invalid_password | Your email or password is incorrect. Try again. |
      | random_email            | valid_password   | Incorrect username or password.                 |
      | random_email            | invalid_password | Incorrect username or password.                 |
    