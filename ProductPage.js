class ProductsPage {
  verifyProductsVisible() {
    cy.get('.inventory_item').should('be.visible');
  }

  verifyCartIcon() {
    cy.get('.shopping_cart_link').should('exist');
  }
}

export default new ProductsPage();
