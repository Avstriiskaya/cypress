describe('Логин', function () {

    it('Правильный логин и пароль', function () {
       cy.visit('https://login.qa.studio//');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#message').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
    
    it('Востановление пароля ', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.reload();
        })
    
    it('Не верный логин и пароль', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#mail').type('germaaaan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1111');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
    
    it('Не верный логин, версный пароль', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#mail').type('man@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Не верный логин, версный пароль', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })        
})

