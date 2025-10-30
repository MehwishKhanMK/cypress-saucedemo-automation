import LoginPage from './pages/LoginPage';

describe('SauceDemo Product Validation', () => {

  beforeEach(() => {
    // Visit and log in using POM
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.clickLogin();

    // Confirm that we are on the inventory page
    cy.url().should('include', '/inventory.html');
  });

  it('should display all products with names and prices', () => {
    // Verify that at least one product is displayed
    cy.get('.inventory_item').should('have.length.greaterThan', 0);

    // Validate that each product has a name
    cy.get('.inventory_item_name').each(($el) => {
      cy.wrap($el).should('not.be.empty');
    });

    // Validate that each product price contains a dollar sign
    cy.get('.inventory_item_price').each(($el) => {
      cy.wrap($el).invoke('text').should('match', /\$/);
    });
  });

  it('should open product detail page when a product is clicked', () => {
    // Click on the first product name
    cy.get('.inventory_item_name').first().click();

    // Validate product detail page opens
    cy.get('.inventory_details_name').should('be.visible');
  });
});
