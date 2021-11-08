import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to Login page$/, () => {
  cy.visit("/");
});

Given(/^I put a username "([^"]*)"$/, (username) => {
  cy.get('input#login-email-input').type(username);
});

Given(/^I put a password "([^"]*)"$/, (userPassword) => {
  cy.get('input#login-password-input').type(userPassword);
});

Given(/^I click on Login button$/, () => {
  cy.get('button.login-page-new__main-form-button').click();
});

/*Then(/^I verify I was logged in$/, () => {
  cy.visit('https://app.clickup.com/30914357/settings/profile');
});*/