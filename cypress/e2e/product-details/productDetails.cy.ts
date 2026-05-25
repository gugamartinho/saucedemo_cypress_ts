import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import BasePage from "../../pages/BasePage";

describe('Product Details Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const productDetailsPage = new ProductDetailsPage();
    const basePage = new BasePage();
    let productData: ProductDetailsFixture; // Variable to hold fixture data

    before(() => {
      cy.fixture('productDetails').then((data) => {
        productData = data;
      });
    });

    beforeEach(() => {
        loginPage.visit();
        loginPage.login(Cypress.env('VALID_USERNAME'), Cypress.env('VALID_PASSWORD'));
    });

    afterEach(() => {
        basePage.logout();
    });

    it('should display product details page after clicking a product', () => {
        inventoryPage.openProductDetailsByIndex(productData.products[0].index);
        productDetailsPage.checkProductDetailsPageIsDisplayed();
    });

    it('should display back to products button on product details page', () => {
        inventoryPage.openProductDetailsByIndex(productData.products[0].index);
        productDetailsPage.checkBackToProductsButtonIsVisible();
    });

    it('should navigate back to inventory page when clicking back to products button', () => {
        inventoryPage.openProductDetailsByIndex(productData.products[0].index);
        productDetailsPage.checkBackToProductsButtonIsVisible();
        productDetailsPage.clickBackToProductsButton();
        inventoryPage.checkInventoryPageIsDisplayed();
    });

    it('should display correct product details for the product', () => {
        inventoryPage.openProductDetailsByIndex(productData.products[0].index);
        productDetailsPage.checkProductNameIsCorrect(productData.products[0].name);
        productDetailsPage.checkProductDescriptionIsCorrect(productData.products[0].description);
        productDetailsPage.checkProductPriceIsCorrect(productData.products[0].price);
        productDetailsPage.checkAddToCartButtonIsVisible();
    });

});