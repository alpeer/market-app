
import { Icon } from "./Icon"

describe("Icon", () => {

  it("should mount", () => {
    cy.mount(<Icon />)

  })

  it("can render id", () => {
    cy.mount(<Icon id="test-comp" />)

    cy.get("#test-comp")
  })
  it("can render className", () => {
    cy.mount(<Icon className="test" />)

    cy.get("img.test")
  })
  it("can render icon", () => {
    cy.mount(<Icon icon="Check" />)

    cy.get("img")
  })
  it("can render size", () => {
    cy.mount(<Icon icon="Check" size={100} />)

    cy.get("img").invoke('height').should("eq", 100)
  })
})