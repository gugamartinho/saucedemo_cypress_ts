export default class ProductDetailsPage {
    private backToProductsButton = '[data-test=back-to-products]';
    private productName = '[data-test=inventory-item-name]';
    private productDescription = '[data-test=inventory-item-desc]'  ;
    private productPrice = '[data-test=inventory-item-price]';
    private addToCartButton = '[data-test=add-to-cart]';

    checkProductDetailsPageIsDisplayed() {
        cy.url().should('include', '/inventory-item.html');
    }

    checkBackToProductsButtonIsVisible() {
        cy.get(this.backToProductsButton).should('be.visible');
    }

    clickBackToProductsButton() {
        cy.get(this.backToProductsButton).click();
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