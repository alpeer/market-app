/// <reference types="cypress" />

export const getPrice = el => Number((el.innerHTML || el.text()).replace("₺", "").replace(",", "."))

describe('Modify item count on cart', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
    sessionStorage.removeItem('cart')
    cy.get('.cart-button').click()
    cy.get('.Cart.Popup ul').find(".EmptyCart")

  })
  it('can add multiple elements', () => {
    let length
    cy.get('.ProductCard button').then(buttons => {
      length = buttons.length;
      [...buttons].forEach(button => button.click())
    })
    cy.get('.CartItem').then(items => expect(items.length).equals(length))

  })
  it('has limited height', () => {
    let length
    cy.get('.ProductCard button').then(buttons => {
      length = buttons.length;
      [...buttons].forEach(button => button.click())
    })
    cy.get('.CartItem').then(items => expect(items.length).equals(length))
    cy.get('.Cart ul').then(item => expect(item[0].scrollHeight).greaterThan(660))
    cy.get('.Cart.Popup').then(item => expect(item[0].offsetHeight).below(660))

  })
  it('shows total price correct', () => {
    let totalPrice;
    cy.get('.ProductCard button').then(buttons => {
      [...buttons].forEach(button => button.click())
    })

    cy.get('.CartItem .Price').then(items => {
      totalPrice = [...items].reduce((o, el) => o + getPrice(el), 0)
    })
    cy.get(".Price.total-price")
      .then(items =>
        [...items].forEach(el =>
          expect(totalPrice).equal(getPrice(el))))

  })
})