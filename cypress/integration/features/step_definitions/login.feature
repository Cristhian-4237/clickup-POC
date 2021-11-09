Feature: User Login
    Scenario: Login using valid credentials
      Given I navigate to Login page
        And I put a username "jvccristhian@gmail.com"
        And I put a password "Control123!"
        And I click on Login button
        And I go to Board page
        And I create a task
      Then I verify the task was created 


    