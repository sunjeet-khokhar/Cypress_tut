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
      //.clear()
  })

  context('form submission',() => {
    beforeEach(() => {
        cy.visit('/')
        cy.server()
    })
  it('add a new todo on submit',() => {
    cy.route('POST','/api/todos', {
      name : 'Brain fade',
      id : 1,
      isComplete: false
    })
    cy.get('#app > div > header > form > input')
      .type('Brain fade')
      .type('{enter}')
      .should('have.value','')
    cy.get('.todo-list li')
      .should('have.length',1)
      .and('contain','Brain fade')
    })

    it('display an error on failed submission',() => {
      cy.route({
        url: '/api/todos',
        method: 'POST',
        status: 500,
        response: {}
      })

      cy.get('#app > div > header > form > input')
        .type('Error{enter}')
      //cy.get('#app > div > header > span1')
      cy.get('.error')  // element of error class is available
        .should('be.visible')
      cy.get('.todo-list li')
        .should('not.exist')
    })
  })
})
