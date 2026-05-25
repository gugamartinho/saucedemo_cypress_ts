export default class CheckOutCompletePage {
    //selectors
    private completeHeader = '[data-test="complete-header"]';
    private completeText = '[data-test="complete-text"]';
    private backHomeButton = '[data-test="back-to-products"]';

     //actions
    visit() {
        cy.visit('/checkout-complete.html');
    }

    clickBackHomeButton() {
        cy.get(this.backHomeButton).click();
    }

    //assertions
    checkCheckoutCompletePageIsDisplayed() {
        cy.url().should('include', '/checkout-complete.html');
    }

    checkCompleteHeader(expectedHeader: string) {
        cy.get(this.completeHeader).should('contain.text', expectedHeader);
    }

    checkCompleteText(expectedText: string) {
        cy.get(this.completeText).should('contain.text', expectedText);
    }
}