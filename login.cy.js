import LoginPage from './pages/LoginPage';
/// <reference types="cypress"/>

describe('SauceDemo Login - Failure Test', () => {
  it('should show error for invalid login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('wrong_user');
    LoginPage.fillPassword('wrong_pass');
    LoginPage.clickLogin();

    cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Username and password do not match');
  });
});

describe('SauceDemo Login - Success Test', () => {
 it('should login successfully using POM', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.clickLogin();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });
});

