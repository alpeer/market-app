describe('Req 8.2- Filter products by brand', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
  })

  it('has brand filter', () => {
    cy.get('.Section[name="Brands"] .title').should('have.text', "Brands")
  })

  it('can search brands', () => {
    cy.get('.SearchableFilter[name="brand"] .MuiTextField-root input').as("searchInput")

    cy.get("@searchInput")
      .type("Boyle")
    cy.get('.SearchableFilter[name="brand"] [role="rowgroup"]').children().then(e =>
      expect(e.length)
        .equals(2))
    cy.get('.SearchableFilter[name="brand"] [role="rowgroup"] > *:nth-child(2)  .name')
      .should("have.text", "Boyle LLC")
      .click()
  })
  it('select brand', () => {
    cy.get('.SearchableFilter[name="brand"] [role="rowgroup"] > *:nth-child(1)')
      .as("allBrandsOption")
      .find(".name").should("have.text", "All")
    cy.get('.SearchableFilter[name="brand"] [role="rowgroup"] > *:nth-child(2)').as("secondBrand")
      .find('.MuiCheckbox-root').as("secondBrand-checkbox").should("not.have.class", "Mui-checked")
      .click({ force: true })
      .should("have.class", "Mui-checked")

    cy.get("@allBrandsOption")
      .find(".MuiCheckbox-root")
      .should("not.have.class", "Mui-checked")
    cy.get(".MuiPagination-ul li").then(e => expect(e.length).below(6))
    cy.get("@secondBrand")
      .find(".MuiCheckbox-root")
      .click({ force: true })
      .should("not.have.class", "Mui-checked")
    cy.get("@allBrandsOption")
      .find(".MuiCheckbox-root")
      .should("have.class", "Mui-checked")
    cy.get(".MuiPagination-ul li").then(e => expect(e.length).greaterThan(6))
  })
})