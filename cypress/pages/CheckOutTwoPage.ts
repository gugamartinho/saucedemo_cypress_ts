export default class CheckOutTwoPage {
    //selectors
    private finishButton = '[data-test="finish"]';
    private cancelButton = '[data-test="cancel"]';
    private cartItem = '[data-test=inventory-item]';
    private itemDescription = '[data-test=inventory-item-desc]';
    private itemPrice = '[data-test=inventory-item-price]';
    private paymentInformation = '[data-test=payment-info-value]';
    private shippingInformation = '[data-test=shipping-info-value]';
    private itemTotal = '[data-test=subtotal-label]';
    private tax = '[data-test=tax-label]';
    private total = '[data-test=total-label]';

     //actions
    visit() {
        cy.visit('/checkout-step-two.html');
    }

    clickFinishButton() {
        cy.get(this.finishButton).click();
    }

    clickCancelButton() {
        cy.get(this.cancelButton).click();
    }

    //assertions
    checkCheckoutInformationPageIsDisplayed() {
        cy.url().should('include', '/checkout-step-two.html');
    }

    checkProductName(productName: string) {
        cy.get(this.cartItem).contains(productName).should('be.visible');
    }

    checkProductQuantity(productName: string, expectedQuantity: number) {
        cy.get(this.cartItem).should('have.length', expectedQuantity);
    }

    checkProductDescription(productName: string, expectedDescription: string) {
        cy.get(this.cartItem).contains(productName).parent().find(this.itemDescription).should('contain.text', expectedDescription);
    }

    checkProductPrice(productName: string, expectedPrice: string) {
        cy.get(this.cartItem).contains(productName).parent().find(this.itemPrice).should('contain.text', expectedPrice);
    }

    checkPaymentInformation(expectedPaymentInfo: string) {
        cy.get(this.paymentInformation).should('contain.text', expectedPaymentInfo);
    }

    checkShippingInformation(expectedShippingInfo: string) {
        cy.get(this.shippingInformation).should('contain.text', expectedShippingInfo);
    }

    checkItemTotal(expectedTotal: string) {
        cy.get(this.itemTotal).should('contain.text', expectedTotal);
    }

    checkTax(expectedTax: string) {
        cy.get(this.tax).should('contain.text', expectedTax);
    }

    checkTotal(expectedTotal: string) {
        cy.get(this.total).should('contain.text', expectedTotal);
    }
}