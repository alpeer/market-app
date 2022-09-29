describe('Req 8.4- Filter products by item type', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
  })

  it('has item type filter', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.TagSelector').children().its("length").should("be.eq", 2)
  })
  it('filter by item type', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get(".ProductCard:nth-child(1)")
      .then(e => expect(e[0].getAttribute("datatype")).equals("mug"))
    cy.get('.TagSelector .Tag:nth-child(2)').click()
  })
})
