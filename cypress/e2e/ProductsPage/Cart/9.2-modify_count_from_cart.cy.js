/// <reference types="cypress" />
export const getPrice = el => Number((el.innerHTML || el.text()).replace("₺", "").replace(",", "."))

describe('Modify item count on cart', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
    sessionStorage.removeItem('cart')
    cy.get('.cart-button').click()
    cy.get('.Cart.Popup ul').find(".EmptyCart")

  })
  it('can add via button at cart item', () => {
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.CartItem').first().find(".IconButton").last().click()
    cy.get('.ProductCard').first().find(".Count .value").should("have.text", " 2 ")
  })

  it('has proper count value', () => {
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.CartItem').first().find(".Count .value").should("have.text", " 1 ")
    cy.get('.CartItem').first().find(".IconButton").last().click()
    cy.get('.ProductCard').first().find(".Count .value").should("have.text", " 2 ")
    cy.get('.CartItem').first().find(".Count .value").should("have.text", " 2 ")
  })
  it('can remove via button at cart item', () => {
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.CartItem').first()
    cy.get('.CartItem').first().find(".IconButton").first().click()
    cy.get('.Cart.Popup ul').find(".EmptyCart")
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ")
  })
  it('shows total price correct', () => {
    let price;
    cy.get('.ProductCard').first().find("button").should("have.text", " Add ").click()
    cy.get('.CartItem').first().find(".Price")
      .then(el => price = getPrice(el))
    cy.get(".Price.total-price")
      .then(items =>
        [...items].forEach(el =>
          expect(price).equal(getPrice(el))))
    cy.get('.CartItem').first().find(".IconButton").last().click()
    cy.get(".Price.total-price")
      .then(items =>
        [...items].forEach(el =>
          expect(price * 2).equal(getPrice(el))))
    cy.get('.CartItem').first().find(".IconButton").first().click()
    cy.get(".Price.total-price")
      .then(items =>
        [...items].forEach(el =>
          expect(price).equal(getPrice(el))))
  })
})