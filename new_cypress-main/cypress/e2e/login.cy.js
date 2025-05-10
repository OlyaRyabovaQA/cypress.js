describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный пароль
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный логин
         cy.get('#loginButton').click(); // Войти;
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажали кнопку забыли пароль
        cy.get('#mailForgot').type('olushka208@yandex.ru'); // Ввели e-mail
        cy.get('#restoreEmailButton').click(); // Нажали кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Успешно отправили пароль на e-mail
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный пароль
        cy.get('#pass').type('iLoveqastudio'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Войти
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после ввода вижу текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })
     it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт
        cy.get('#mail').type('german1@dolnikov.ru'); // Ввели неверный пароль
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Войти
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после ввода вижу текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })
    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Вход
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после ввода вижу текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Нужно исправить проблему валидации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })
     it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Вход
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что после ввода вижу текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })
})