export default class InventoryPage {
    private inventoryItems = '[data-test=inventory-item]';
    private inventoryItemName = '[data-test=inventory-item-name]';
    private inventoryItemPrice = '[data-test=inventory-item-price]';

    visit() {
        cy.visit('/inventory.html');
    }

    getInventoryItems() {
        // Return the inventory items as a Cypress chainable for further assertions
        return cy.get(this.inventoryItems);
    }

    assertNumberOfProductsListed(expectedCount: number) {
        this.getInventoryItems().should('have.length', expectedCount);
    }

    assertProductNameByIndex(index: number, expectedName: string) {
        const product = this.getInventoryItems().eq(index).find(this.inventoryItemName);
        product.should('be.visible').and('contain', expectedName);
    }

    assertProductPriceByIndex(index: number, expectedPrice: string) {
        const product = this.getInventoryItems().eq(index).find(this.inventoryItemPrice);
        product.should('be.visible').and('contain', expectedPrice);
    }
}           