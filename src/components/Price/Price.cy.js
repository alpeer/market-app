
import { Price } from "./Price"

describe("Price", () => {
  it("should mount", () => {
    cy.mount(<Price />)
  })

  it("can render id", () => {
    cy.mount(<Price id="test-comp" />)

    cy.get("#test-comp")
  })
  it("can render className", () => {
    cy.mount(<Price className="test" />)

    cy.get(".Price.test")
  })
  it("can render price", () => {
    cy.mount(<Price value={5.11} />)

    cy.get(".Price").should("have.text", "₺5,11")
  })
  it("can render integer price as float", () => {
    cy.mount(<Price value={100} />)

    cy.get(".Price").should("have.text", "₺100,00")
  })
})