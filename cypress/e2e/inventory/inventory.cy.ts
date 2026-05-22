import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

describe('Inventory Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    let productData: ProductDetailsFixture;

    before(() => {
      cy.fixture('productDetails').then((data) => {
        productData = data;
      });
    });

    beforeEach(() => {
        loginPage.visit();
        loginPage.login(Cypress.env('VALID_USERNAME'), Cypress.env('VALID_PASSWORD'));
    });

    it('should display the inventory page after successful login', () => {
        // Assert that the URL includes '/inventory.html' after successful login
        cy.url().should('include', '/inventory.html');
    });

    it('should display the correct number of products', () => {
        // Assert that there are 6 products displayed on the inventory page
        inventoryPage.assertNumberOfProductsListed(6);
    });

    it('listed products should have correct names', () => {
        productData.products.forEach((product) => {
            inventoryPage.assertProductNameByIndex(product.index, product.name); // Use the index from the fixture to assert the name for each product
        });
    });

    it('listed products should have correct prices', () => {
        productData.products.forEach((product) => {
            inventoryPage.assertProductPriceByIndex(product.index, product.price); // Use the index from the fixture to assert the price for each product
        });
    });

    it('should sort products correctly by name A-Z', () => {
        inventoryPage.sortProductsBy('az');
        inventoryPage.checkProductsSortedCorrectly('az');
    });

    it('should sort products correctly by name Z-A', () => {
        inventoryPage.sortProductsBy('za');
        inventoryPage.checkProductsSortedCorrectly('za');
    });

    it('should sort products correctly by price Low to High', () => {
        inventoryPage.sortProductsBy('lohi');
        inventoryPage.checkProductsSortedCorrectly('lohi');
    });

    it('should sort products correctly by price High to Low', () => {
        inventoryPage.sortProductsBy('hilo');
        inventoryPage.checkProductsSortedCorrectly('hilo');
    });
});