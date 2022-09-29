
describe('Req 7.1- Pagination', () => {
  beforeEach(() => {
    cy.visit(cy.config("url"))
  })

  it("should show the correct number of pages", () => {
    cy.get(".ProductCard") // wait for product grid
      .get(".MuiPagination-ul li")
      .then((items) => {
        const length = items.length;
        const lastPage = length - 2
        expect(items.eq(lastPage), 'last page').to.contain("54")
      })
  })
  it("should paginate next correctly", () => {
    cy.get(".ProductCard") // wait for product grid

    cy.get(".MuiPagination-ul li").last().click() // next page
    cy.get(".MuiPagination-ul li:nth-child(2) button").should("not.have.class", "Mui-selected") // 1st page
    cy.get(".MuiPagination-ul li:nth-child(3) button").should("have.class", "Mui-selected") // 2nd page
    cy.get(".MuiPagination-ul li").last().click() // next page
    cy.get(".MuiPagination-ul li:nth-child(4) button").should("have.class", "Mui-selected") // 3rd page
  })
  it("should paginate prev correctly", () => {
    cy.get(".ProductCard") // wait for product grid

    cy.get(".MuiPagination-ul li:nth-child(4) button").click().should("have.class", "Mui-selected") // 3rd page
    cy.get(".MuiPagination-ul li").first().click() // previous page
    cy.get(".MuiPagination-ul li:nth-child(4) button").should("not.have.class", "Mui-selected") // 3rd page
    cy.get(".MuiPagination-ul li:nth-child(3) button").should("have.class", "Mui-selected") // 2nd page
    cy.get(".MuiPagination-ul li").first().click() // previous page
    cy.get(".MuiPagination-ul li:nth-child(2) button").should("have.class", "Mui-selected") // 1st page
  })
  it("should have 16 items per page", () => {
    cy.get(".ProductCard") // wait for product grid
      .then((items) => {
        expect(items, '16 items').to.have.length(16)
      })
    cy.get(".MuiPagination-ul li").last().click() // next page
    cy.get(".ProductCard") // wait for product grid
      .then((items) => {
        expect(items, '16 items').to.have.length(16)
      })
  })
  it("renders prev and next button states", () => {
    cy.get(".ProductCard")
    cy.get(".MuiPagination-ul li").first().find("button")
      .should("be.disabled")
    cy.get(".ProductCard")
      .get(".MuiPagination-ul li:nth-child(3)").click()
    cy.get(".MuiPagination-ul li").first()
      .find("button").should("not.be.disabled")
      .click()

    cy.get(".MuiPagination-ul li").last().find("button")
      .should("not.be.disabled")
    cy.get(".MuiPagination-ul li")
      .then((items) => {
        const length = items.length;
        const lastPage = length - 2
        cy.get(items[lastPage]).click() // click last page
      })
    cy.get(".MuiPagination-ul li").last().find("button")
      .should("be.disabled")
  })
})