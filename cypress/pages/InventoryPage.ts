export default class InventoryPage {
    private inventoryItems = '[data-test=inventory-item]';
    private inventoryItemImgLink = '[data-test*=img-link]';
    private inventoryItemName = '[data-test=inventory-item-name]';
    private inventoryItemPrice = '[data-test=inventory-item-price]';
    private sortSelect = '[data-test=product-sort-container]';

    visit() {
        cy.visit('/inventory.html');
    }

    getInventoryItems() {
        // Return the inventory items as a Cypress chainable for further assertions
        return cy.get(this.inventoryItems);
    }

    checkInventoryPageIsDisplayed() {
        cy.url().should('include', '/inventory.html');
    }

    openProductDetailsByIndex(index: number) {
        this.getInventoryItems().eq(index).find(this.inventoryItemImgLink).click();
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

    sortProductsBy(criteria: 'az' | 'za' | 'lohi' | 'hilo') {
        if (!criteria) {
            throw new Error('Sorting criteria is required');
        }else {
            cy.get(this.sortSelect).select(criteria);
        } 
    }
    
    checkProductsSortedCorrectly(criteria: 'az' | 'za' | 'lohi' | 'hilo') {
        this.getInventoryItems().then(items => {
            const names = items.map((index, item) => Cypress.$(item).find(this.inventoryItemName).text()).get();
            const prices = items.map((index, item) => Cypress.$(item).find(this.inventoryItemPrice).text()).get();

            switch (criteria) {
                case 'az':
                    // Check if names are sorted A-Z
                    const sortedNamesAZ = [...names].sort();
                    expect(names).to.deep.equal(sortedNamesAZ);
                    break;
                case 'za':
                    // Check if names are sorted Z-A
                    const sortedNamesZA = [...names].sort().reverse();
                    expect(names).to.deep.equal(sortedNamesZA);
                    break;
                case 'lohi':
                    // Check if prices are sorted Low to High
                    const sortedPricesLOHI = [...prices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));
                    expect(prices).to.deep.equal(sortedPricesLOHI);
                    break;
                case 'hilo':
                    // Check if prices are sorted High to Low
                    const sortedPricesHILO = [...prices].sort((a, b) => parseFloat(b.replace('$', '')) - parseFloat(a.replace('$', '')));
                    expect(prices).to.deep.equal(sortedPricesHILO);
                    break;
                default:
                    throw new Error('Invalid sorting criteria');
            }
        }); 
    }

}