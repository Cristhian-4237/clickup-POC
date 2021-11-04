// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop'

Cypress.Commands.add('login', () =>{
    cy.visit('/');
    cy.get('input#login-email-input').type(Cypress.env('username1'));        
    cy.get('input#login-password-input').type(Cypress.env('password1'));
    cy.get('button.login-page-new__main-form-button').click();
    /*cy.wait(5000);
    cy.get('div.cu-simple-bar__bottom-menu-arrow').click();
    cy.wait(5000);
    cy.contains('div[data-test="user-settings-menu"]', 'Cristhian').should('be.visible');*/
    //cy.visit('https://app.clickup.com/30914357/settings/profile');
    //cy.contains('div.cu-nav-sts__team', 'Cristhian\'s Workspace').should('be.visible');
})