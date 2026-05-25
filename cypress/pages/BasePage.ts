export default class BasePage {
    // Common selectors
    private header = '.react-burger-menu-btn';
    private footer = '[data-test=footer]';
    private shoppingCartLink = '[data-test=shopping-cart-link]';
    private menuButton = '#react-burger-menu-btn';
    private logoutLink = '[data-test=logout-sidebar-link]';
    private cartBadge = '[data-test=shopping-cart-badge]';

    // Common actions
    clickShoppingCart() {
        cy.get(this.shoppingCartLink).click();
    }

    logout() {
        cy.get(this.menuButton).click();
        cy.get(this.logoutLink).click();
        cy.url().should('equal', Cypress.config('baseUrl') + '/');
    }

    // Saucedemo Common assertions
    checkHeaderIsVisible() {
        cy.get(this.header).should('be.visible');
    }

    checkFooterIsVisible() {
        cy.get(this.footer).should('be.visible');
    }

    // Cart specific assertions
    checkCartBadgeIsDisplayed() {
        cy.get(this.cartBadge).should('be.visible');
    }

    checkCartBadgeCount(expectedCount: number) {
        cy.get(this.cartBadge).should('have.text', expectedCount.toString());
    }
}