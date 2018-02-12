// npm run dev to launch the app
// npm run cypress to launch Cypress
describe('Input form',() => {
  beforeEach(() => {
      cy.visit('/')
  })

  it('focuses input on load',() => {
    cy.focused()
      .should('have.class','new-todo')
  })
  it('accepts input',() => {
    const text_to_Type = "vaccum the house"
    cy.get("#app > div > header > form > input")
      .type(text_to_Type)
      .should("have.value",text_to_Type)
      .clear()
  })

  context('form submission',() => {
    cy.get('#app > div > header > form > input')
      .type(text_to_Type)
      .type('{enter}')
  })
})
