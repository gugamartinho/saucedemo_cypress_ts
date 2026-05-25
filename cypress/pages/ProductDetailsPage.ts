export default class ProductDetailsPage {
    //selectors
    private backToProductsButton = '[data-test=back-to-products]';
    private productName = '[data-test=inventory-item-name]';
    private productDescription = '[data-test=inventory-item-desc]'  ;
    private productPrice = '[data-test=inventory-item-price]';
    private addToCartButton = '[data-test=add-to-cart]';

    //actions
    clickBackToProductsButton() {
        cy.get(this.backToProductsButton).click();
    }

    //assertions
    checkProductDetailsPageIsDisplayed() {
        cy.url().should('include', '/inventory-item.html');
    }

    checkBackToProductsButtonIsVisible() {
        cy.get(this.backToProductsButton).should('be.visible');
    }

    checkProductNameIsCorrect(expectedName: string) {
        cy.get(this.productName).should('be.visible').and('contain', expectedName);
    }

    checkProductDescriptionIsCorrect(expectedDescription: string) {
        cy.get(this.productDescription).should('be.visible').and('contain', expectedDescription);
    }

    checkProductPriceIsCorrect(expectedPrice: string) {
        cy.get(this.productPrice).should('be.visible').and('contain', expectedPrice);
    }

    checkAddToCartButtonIsVisible() {
        cy.get(this.addToCartButton).should('be.visible');
    }
}