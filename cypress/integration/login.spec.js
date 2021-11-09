
describe('Login Page', () => {

    it('Verify it is possible loggin in', () => {
        cy.login();
                
    });
    
    it('Verify a new task can be added in To Do', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.wait(3000);
        cy.get('div[cutooltip="Create task"]', { timeout: 2000 }).first().click();
        cy.get('input.cu-panel-board__input', { timeout: 2000 }).type('This is the test task in To DO1.1');
        cy.get('div.cu-panel-board__enter-button').click();
        cy.wait(3000);
        cy.contains('This is the test task in To DO1.1').should('be.visible');
    });

    it('Verify a new task can be added in IN PROGRESS', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.wait(3000);
        cy.get('div[cutooltip="Create task"]', { timeout: 3000 }).eq(1).click();
        cy.get('input.cu-panel-board__input', { timeout: 2000 }).type('This is the test task in In progress1.1');
        cy.get('div.cu-panel-board__enter-button').click();
        cy.wait(3000);
        cy.contains('This is the test task in In progress1.1').should('be.visible');
    });

    it('Verify a new task can be added in NEEDS REVIEW', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.wait(3000);
        cy.get('div[cutooltip="Create task"]', { timeout: 3000 }).eq(2).click();
        cy.get('input.cu-panel-board__input', { timeout: 2000 }).type('This is the test task in NEEDS REVIEW1.1');
        cy.get('div.cu-panel-board__enter-button').click();
        cy.wait(3000);
        cy.contains('This is the test task in NEEDS REVIEW1.1').should('be.visible');
    });

    it('Verify a task can be deleted from the Board', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.wait(5000);
        cy.contains('section[class^="cdk-drag cu-panel-board cu-panel-board__task"][class$="ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'Deleted task').rightclick();
        cy.wait(3000);
        cy.get('a[class="nav-menu-item nav-menu-item__top-choices-option ng-star-inserted"]').eq(4).click();
        cy.wait(3000);
        cy.contains('section[class^="cdk-drag cu-panel-board cu-panel-board__task"][class$="ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'Deleted task').should('not.exist');
    });

    it('Verify a task can be edited from the Board', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.wait(5000);
        cy.contains('section[class^="cdk-drag cu-panel-board cu-panel-board__task"][class$="ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'Edited task').click();
        cy.wait(5000);
        cy.get('textarea[class^="cdk-textarea-autosize task-name"][class$="ng-star-inserted"]').dblclick().clear();
        cy.get('textarea[class^="cdk-textarea-autosize task-name"][class$="ng-star-inserted"]').dblclick().type('This task was EDITED');
        cy.get('div[tooltipmodifier="tooltip_left-nowrap"]').click();
    });

});
