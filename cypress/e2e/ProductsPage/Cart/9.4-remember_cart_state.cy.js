/// <reference types="cypress" />

let productName
describe('Modify item count on cart', () => {

  sessionStorage.removeItem('cart')

  beforeEach(() => {
    cy.visit(cy.config("url"))
    cy.get('.cart-button').click()

  })
  it('add a product', () => {
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.ProductCard').first().find(".title").then(e => productName = e.text().trim())
    cy.get('.CartItem').first().find(".title").then(e => expect(productName).equals(e.text().trim()))
  })
  it('refresh and see product still on cart', () => {
    cy.get('.CartItem').first().find(".title").then(e => expect(productName).equals(e.text().trim()))
  })
})