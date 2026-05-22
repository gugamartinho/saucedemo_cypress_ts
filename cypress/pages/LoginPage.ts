export default class LoginPage {
    private usernameInput = '[data-test=username]';
    private passwordInput = '[data-test=password]';
    private loginButton = '[data-test=login-button]';
    private errorMessage = '[data-test=error]';

    visit() {
        cy.visit('/');
    }

    typeUsername(username: string) {
        cy.get(this.usernameInput).clear()
        if (username)   cy.get(this.usernameInput).type(username);
    }

    typePassword(password: string) {
        cy.get(this.passwordInput).clear()
        if (password)   cy.get(this.passwordInput).type(password);
    }

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    assertErrorMessage(expectedMessage: string) {
        cy.get(this.errorMessage).should('be.visible').and('contain', expectedMessage);
    }

    // Convenience method to perform the entire login process
    login(username: string, password: string) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
}