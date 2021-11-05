
describe('Login Page', () => {

    it('Verify it is possible loggin in', () => {
        cy.login();
                
    });
    
    it('Verify a new task can be added in To Do', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.get('div[cutooltip="Create task"]').first().click();
        cy.wait(3000);
        cy.get('input.cu-panel-board__input').type('This is the test task in To DO1.1');
        cy.get('div.cu-panel-board__enter-button').click();
        cy.contains('This is the test task in To DO1.1').should('be.visible');
    });

    it('Verify a new task can be added in IN PROGRESS', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.get('div[cutooltip="Create task"]').eq(1).click();
        cy.wait(3000);
        cy.get('input.cu-panel-board__input').type('This is the test task in In progress1.1');
        cy.get('div.cu-panel-board__enter-button').click();
        cy.contains('This is the test task in In progress1.1').should('be.visible');
    });

    it('Verify a new task can be added in NEEDS REVIEW', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.get('div[cutooltip="Create task"]').eq(2).click();
        cy.wait(3000);
        cy.get('input.cu-panel-board__input').type('This is the test task in NEEDS REVIEW1.1');
        cy.get('div.cu-panel-board__enter-button').click();
        cy.contains('This is the test task in NEEDS REVIEW1.1').should('be.visible');
    });

    /*it('It is possible drag and drop an element from TO DO to IN PROGRESS', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        //cy.contains('div[class="cu-panel-board__header-container ng-star-inserted"]', 'This is the test task in To DO3').drag('div[class="cu-dashboard-board__column ng-trigger ng-trigger-flyInOut ng-tns-c743-21 cu-dashboard-board__column_closed ng-star-inserted"]');
        //cy.contains('section[class="cdk-drag cu-panel-board cu-panel-board__task ng-tns-c743-22 ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'This is the test task in To DO1').drag('div[class="cu-dashboard-board__column ng-trigger ng-trigger-flyInOut ng-tns-c743-21 cu-dashboard-board__column_closed ng-star-inserted"]');
        cy.contains('section[class="cdk-drag cu-panel-board cu-panel-board__task ng-tns-c743-22 ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'This is the test task in To DO1').drag('div[class="cdk-drop-list cu-panel-board__column-drag ng-tns-c743-22 ng-star-inserted"]').eq(3);
    });*/

    /*it('Verify it is possible drag 2', () => {
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.wait(5000);
        //const drag1 = cy.contains('section[class="cdk-drag cu-panel-board cu-panel-board__task ng-tns-c743-22 ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'This is the test task in To DO2');
        cy.contains('section[class^="cdk-drag cu-panel-board cu-panel-board__task"][class$="ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'This is the test task in To DO2').as('drag12');
        
        cy.wait(5000);
        //const drop1 = cy.get('div[class="cdk-drop-list cu-panel-board__column-drag ng-tns-c743-22 ng-star-inserted"]').eq(3);
        cy.get('div[class^="cdk-drop-list cu-panel-board__column-drag"][class$="ng-star-inserted"]').eq(3).as('drop12');
                
        const dataTransfer = new DataTransfer();
        cy.get('@drag12').trigger('dragstart', {
        dataTransfer
        })
        cy.get('@drop12').trigger('drop', {
        dataTransfer
        })
    });*/

    it('Verify a task can be deleted from the Board', () => {
        cy.login();
        cy.contains('div.cu-data-view-item__name-text', 'Board').click();
        cy.wait(5000);
        cy.contains('section[class^="cdk-drag cu-panel-board cu-panel-board__task"][class$="ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'Deleted task').rightclick();
        //cy.contains('cdk-drag cu-panel-board cu-panel-board__task ng-tns-c743-21 ng-trigger ng-trigger-loadingEnter ng-star-inserted', 'Deleted task').trigger('mouseover');
        cy.get('a[class="nav-menu-item nav-menu-item__top-choices-option ng-star-inserted"]').eq(4).click();
        cy.contains('section[class^="cdk-drag cu-panel-board cu-panel-board__task"][class$="ng-trigger ng-trigger-loadingEnter ng-star-inserted"]', 'Deleted task').should('not.exist');
    });

   /*it('Verify it is possible Log out', () => {
        cy.login();
        cy.get('div[data-test="team-avatar_Cristhian\'s Workspace"]').click();
        cy.get('div[class="cu-user-settings-menu-v2__body-column-link cu-user-settings-menu-v2__body-column-link-logout ng-star-inserted"]').click();
    });*/
});