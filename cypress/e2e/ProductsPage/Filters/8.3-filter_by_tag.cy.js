
describe('Req 8.3- Filter products by tag', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
  })
  it('has tag filter', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.Section[name="Tags"] .title').should('have.text', "Tags")
  })

  it('can search tags', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.SearchableFilter[name="tag"] .MuiTextField-root input').as("searchInput")

    cy.get("@searchInput")
      .type("Aeri")
    cy.get('.SearchableFilter[name="tag"] [role="rowgroup"]').children().then(e =>
      expect(e.length)
        .equals(2))
    cy.get('.SearchableFilter[name="tag"] [role="rowgroup"] > *:nth-child(2)  .name')
      .should("have.text", "Aerial")
      .click()
  })
  it('select tag', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.get('.SearchableFilter[name="tag"] [role="rowgroup"] > *:nth-child(1)')
      .as("allTagsOption")
      .find(".name").should("have.text", "All")

    cy.get('.SearchableFilter[name="tag"] .MuiTextField-root input').as("searchInput")
      .type("Cast")

    cy.get('.SearchableFilter[name="tag"] [role="rowgroup"] > *:nth-child(2)').as("secondTag")
      .find('.MuiCheckbox-root').as("secondTag-checkbox").should("not.have.class", "Mui-checked")
      .click({ force: true })
      .should("have.class", "Mui-checked")

    cy.get("@allTagsOption")
      .find(".MuiCheckbox-root")
      .should("not.have.class", "Mui-checked")
    cy.get(".MuiPagination-ul li").then(e => expect(e.length).below(3))


    cy.get(".ProductCard")
      .then(e => {
        expect(e.length).equals(1)
        expect(e[0].getAttribute("datatags").indexOf("Castle")).greaterThan(-1)
      })
    cy.get("@secondTag")
      .find(".MuiCheckbox-root")
      .click({ force: true })
      .should("not.have.class", "Mui-checked")
    cy.get("@allTagsOption")
      .find(".MuiCheckbox-root")
      .should("have.class", "Mui-checked")
    cy.get(".MuiPagination-ul li").then(e => expect(e.length).greaterThan(3))

  })
})
