import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

describe('Inventory Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
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
        inventoryPage.assertProductNameByIndex(0, 'Sauce Labs Backpack');
        inventoryPage.assertProductNameByIndex(1, 'Sauce Labs Bike Light');
        inventoryPage.assertProductNameByIndex(2, 'Sauce Labs Bolt T-Shirt');
        inventoryPage.assertProductNameByIndex(3, 'Sauce Labs Fleece Jacket');
        inventoryPage.assertProductNameByIndex(4, 'Sauce Labs Onesie');
        inventoryPage.assertProductNameByIndex(5, 'Test.allTheThings() T-Shirt (Red)');
    });

    it('listed products should have correct prices', () => {
        inventoryPage.assertProductPriceByIndex(0, '$29.99');
        inventoryPage.assertProductPriceByIndex(1, '$9.99');
        inventoryPage.assertProductPriceByIndex(2, '$15.99');
        inventoryPage.assertProductPriceByIndex(3, '$49.99');
        inventoryPage.assertProductPriceByIndex(4, '$7.99');
        inventoryPage.assertProductPriceByIndex(5, '$15.99');
    });
});