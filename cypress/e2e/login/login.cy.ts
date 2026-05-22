/// <reference types="cypress" />
import LoginPage from "../../pages/LoginPage";

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should login successfully with valid credentials', () => {
        loginPage.login('standard_user', 'secret_sauce');
        // Assert that the URL includes '/inventory.html' after successful login
        cy.url().should('include', '/inventory.html');
    });

    it('should display an error message with invalid password', () => {
        loginPage.login('standard_user', 'invalid_password');
        loginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display an error message with invalid username', () => {
        loginPage.login('invalid_username', 'secret_sauce');
        loginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display an error message with empty credentials', () => {
        loginPage.login('', '');
        loginPage.assertErrorMessage('Epic sadface: Username is required');
    });

    it('should display an error message with locked user', () => {
        loginPage.login('locked_out_user', 'secret_sauce');
        loginPage.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });
});