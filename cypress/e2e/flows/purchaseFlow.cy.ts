import LoginPage from "../../pages/LoginPage";
import CartPage from "../../pages/CartPage";
import InventoryPage from "../../pages/InventoryPage";
import BasePage from "../../pages/BasePage";
import CheckOutOnePage from "../../pages/CheckOutOnePage";
import CheckOutTwoPage from "../../pages/CheckOutTwoPage";
import CheckOutComplete from "../../pages/CheckOutComplete";
import { CheckoutData } from "../../types/checkoutData";

describe('Purchase Flow', () => {
    // Page Object instances
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage();
    const basePage = new BasePage();
    const checkoutOnePage = new CheckOutOnePage();
    const checkoutTwoPage = new CheckOutTwoPage();
    const checkoutCompletePage = new CheckOutComplete();
    // Variables to hold fixture data
    let productData: ProductDetailsFixture; // Variable to hold fixture data
    let clientData: ClientDetailsFixture; // Variable to hold client fixture data
    let checkoutData: CheckoutData; // Variable to hold checkout fixture data

    before(() => {
        cy.fixture('productDetails').then((data) => {
            productData = data;
        });
        cy.fixture('clientDetails').then((data) => {
            clientData = data;
        });
        cy.fixture('checkoutData').then((data) => {
            checkoutData = data;
        });
    });
    
    beforeEach(() => {
        loginPage.visit();
        loginPage.login(Cypress.env('VALID_USERNAME'), Cypress.env('VALID_PASSWORD'));
    });

    /*afterEach(() => {
        basePage.logout();
    });*/

    it('should be able to checkout a product', () => {
        inventoryPage.addProductToCartByIndex(0);
        basePage.clickShoppingCart();
        cartPage.clickCheckoutButton();
        checkoutOnePage.fillCheckoutInformation(clientData.clients[0].firstName, clientData.clients[0].lastName, clientData.clients[0].postalCode);
        checkoutOnePage.clickContinueButton();
        checkoutTwoPage.clickFinishButton();
        checkoutCompletePage.checkCompleteHeader(checkoutData.messages.successHeader);
    });

    it('checkout product and verify details', () => {
        inventoryPage.addProductToCartByIndex(0);
        basePage.clickShoppingCart();
        cartPage.clickCheckoutButton();
        checkoutOnePage.fillCheckoutInformation(clientData.clients[0].firstName, clientData.clients[0].lastName, clientData.clients[0].postalCode);
        checkoutOnePage.clickContinueButton();
        checkoutTwoPage.checkProductName(productData.products[0].name);
        checkoutTwoPage.checkProductDescription(productData.products[0].name, productData.products[0].description);
        checkoutTwoPage.checkProductPrice(productData.products[0].name, productData.products[0].price);
        checkoutTwoPage.checkPaymentInformation(checkoutData.payment.expectedText);
        checkoutTwoPage.checkShippingInformation(checkoutData.shipping.expectedText);
        checkoutTwoPage.checkItemTotal(productData.products[0].price);
        checkoutTwoPage.checkTax(productData.products[0].tax);
        checkoutTwoPage.checkTotal(productData.products[0].total);
        checkoutTwoPage.clickFinishButton();
        checkoutCompletePage.checkCompleteHeader(checkoutData.messages.successHeader);
        checkoutCompletePage.checkCompleteText(checkoutData.messages.successText);
    });

});