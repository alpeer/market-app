/// <reference types="cypress" />

describe('Add product from product grid', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
    sessionStorage.removeItem('cart')
    cy.get('.cart-button').click()
    cy.get('.Cart.Popup ul').find(".EmptyCart")

  })
  it('can add from product list', () => {
    let productName
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.ProductCard').first().find(".title").then(e => productName = e.text().trim())
    cy.get('.CartItem').first().find(".title").then(e => expect(productName).equals(e.text().trim()))
  })
  it('has proper count value', () => {
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.CartItem').first().find(".Count .value").should("have.text", " 1 ")
    cy.get('.ProductCard').first().find(".IconButton").last().click()

    cy.get('.ProductCard').first().find(".Count .value").should("have.text", " 2 ")
    cy.get('.CartItem').first().find(".Count .value").should("have.text", " 2 ")
  })
  it('can remove from product list', () => {
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.CartItem').first()

    cy.get('.ProductCard').first().find(".IconButton").first().click()
    cy.get('.Cart.Popup ul').find(".EmptyCart")
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ")
  })
})