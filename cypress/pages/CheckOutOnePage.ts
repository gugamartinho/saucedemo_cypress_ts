export default class CheckOutOnePage {
    //selectors
    private firstNameInput = '[data-test="firstName"]';
    private lastNameInput = '[data-test="lastName"]';
    private postalCodeInput = '[data-test="postalCode"]';
    private continueButton = '[data-test="continue"]';
    private cancelButton = '[data-test="cancel"]';

     //actions
    visit() {
        cy.visit('/checkout-step-one.html');
    }

    fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.postalCodeInput).type(postalCode);
    }

    clickContinueButton() {
        cy.get(this.continueButton).click();
    }

    clickCancelButton() {
        cy.get(this.cancelButton).click();
    }

    //assertions
    checkCheckoutInformationPageIsDisplayed() {
        cy.url().should('include', '/checkout-step-one.html');
    }
}