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

Given(/^I go to Board page$/, () => {
    cy.contains('div.cu-data-view-item__name-text', 'Board').click();
    cy.wait(3000);
  });

Given(/^I create a task$/, () => {
    cy.get('div[cutooltip="Create task"]', { timeout: 2000 }).first().click();
    cy.get('input.cu-panel-board__input', { timeout: 2000 }).type('This is a task created from CUCUMBER');
    cy.get('div.cu-panel-board__enter-button').click();
    cy.wait(3000);
});

Then(/^I verify the task was created$/, () => {
    cy.contains('This is a task created from CUCUMBER').should('be.visible');
});
