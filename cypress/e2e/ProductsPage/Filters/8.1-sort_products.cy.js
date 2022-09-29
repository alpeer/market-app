/// <reference types="cypress" />

describe('Req 8.1- Sort products', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
  })
  it("has sort options", () => {
    cy.get('.RadioGroup > label')
      .then((items) => {
        expect(items, '4 items').to.have.length(4)
        expect(items.eq(0), 'first item').to.contain('Price low to high')
        expect(items.eq(1), 'second item').to.contain('Price high to low')
        expect(items.eq(2), 'third item').to.contain('New to old')
        expect(items.eq(3), 'fouth item').to.contain('Old to new')
      })
  })
  it('sort options has proper class name', () => {
    cy.get('.RadioGroup > label:nth-child(1) > *:nth-child(1)').should('have.class', 'Mui-checked')
    cy.get('.RadioGroup > label:nth-child(2) > *:nth-child(1)').should('not.have.class', 'Mui-checked')
    cy.get('.RadioGroup > label:nth-child(3) > *:nth-child(1)').should('not.have.class', 'Mui-checked')
    cy.get('.RadioGroup > label:nth-child(4) > *:nth-child(1)').should('not.have.class', 'Mui-checked')
  })

  it('can change sort option', () => {
    cy.get('.RadioGroup label:nth-child(4) .MuiRadio-root')
      .click().first()
      .should('have.class', 'Mui-checked')

    cy.get('.RadioGroup label:nth-child(1) .MuiRadio-root')
      .should('not.have.class', 'Mui-checked')

    cy.get('.RadioGroup label:nth-child(1) .MuiRadio-root')
      .click().first()
      .should('have.class', 'Mui-checked')
  })

  it('can sort data', () => {
    cy.get('.RadioGroup label') // Sort by price, low to high
      .first().click()
    cy.get(".ProductCard:nth-child(1) .Price").first().should('have.text', '₺9,99')
    cy.get('.RadioGroup label:nth-child(2)') // Sort by price, high to low
      .first().click()
    cy.get(".ProductCard:nth-child(1) .Price").first().should('have.text', '₺20,99')
  })
})