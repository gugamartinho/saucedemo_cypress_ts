import LoginPage from "../../pages/LoginPage";
import CartPage from "../../pages/CartPage";
import InventoryPage from "../../pages/InventoryPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import BasePage from "../../pages/BasePage";

describe('Cart Page', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const productDetailsPage = new ProductDetailsPage();
    const cartPage = new CartPage();
    const basePage = new BasePage();
    
    before(() => {
        cy.fixture('productDetails').then((data) => {
            productData = data;
        });
    });

    let productData: ProductDetailsFixture; // Variable to hold fixture data
    
    beforeEach(() => {
        loginPage.visit();
        loginPage.login(Cypress.env('VALID_USERNAME'), Cypress.env('VALID_PASSWORD'));
    });

    afterEach(() => {
        basePage.logout();
    });

    it('should open the cart page when the cart icon is clicked', () => {
        inventoryPage.addProductToCartByIndex(0);
        basePage.clickShoppingCart();
        cartPage.checkCartPageIsDisplayed();
    });

    it('adding a product to the cart should update the cart badge', () => {
        inventoryPage.addProductToCartByIndex(0);
        basePage.checkCartBadgeIsDisplayed();
        basePage.checkCartBadgeCount(1);
    });

    it('should display correct product details in the cart', () => {
        inventoryPage.addProductToCartByIndex(0);
        basePage.clickShoppingCart();
        cartPage.checkProductNameInCart('Sauce Labs Backpack');
        cartPage.checkProductQuantityInCart('Sauce Labs Backpack', 1);
        cartPage.checkProductDescriptionInCart('Sauce Labs Backpack', productData.products[0].description);
        cartPage.checkProductPriceInCart('Sauce Labs Backpack', '$29.99');
    });

});