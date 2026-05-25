export default class CartPage {
    //selectors
    private checkoutButton = '[data-test=checkout]';
    private continueShoppingButton = '[data-test=continue-shopping]';
    private cartItem = '[data-test=inventory-item]';
    private removeButton = '[data-test*=remove]';
    private itemQuantity = '[data-test=item-quantity]';
    private itemDescription = '[data-test=inventory-item-desc]';
    private itemPrice = '[data-test=inventory-item-price]';

    //actions
    visit() {
        cy.visit('/cart.html');
    }

    clickCheckoutButton() {
        cy.get(this.checkoutButton).click();
    }

    clickContinueShoppingButton() {
        cy.get(this.continueShoppingButton).click();
    }

    clickRemoveButtonByProductName(productName: string) {
        cy.get(this.cartItem).contains(productName).parent().find(this.removeButton).click();
    }

    //assertions
    checkCartPageIsDisplayed() {
        cy.url().should('include', '/cart.html');
    }

    checkProductNameInCart(productName: string) {
        cy.get(this.cartItem).contains(productName).should('be.visible');
    }

    checkProductQuantityInCart(productName: string, expectedQuantity: number) {
        cy.get(this.cartItem).should('have.length', expectedQuantity);
    }

    checkProductDescriptionInCart(productName: string, expectedDescription: string) {
        cy.get(this.cartItem).contains(productName).parent().find(this.itemDescription).should('contain.text', expectedDescription);
    }

    checkProductPriceInCart(productName: string, expectedPrice: string) {
        cy.get(this.cartItem).contains(productName).parent().find(this.itemPrice).should('contain.text', expectedPrice);
    }
}