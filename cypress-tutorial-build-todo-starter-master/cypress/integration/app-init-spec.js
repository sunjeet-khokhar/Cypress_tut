describe('App Initilization',() => {
  it('Loads ToDos on page load',() => {
      cy.server()
      cy.route('GET','/api/todos','fixture:todos')
      cy.visit('/')

      cy.get('.todo-list li')
        .should('have.length',4)
      })

  it('should display an error',() => {
      cy.server()
      cy.route({
        url: '/api/todos',
        method: 'GET',
        status: 500,
        response: {}
      })
      cy.visit('/')

      cy.get('.todo-list li')
        .should('have.length',0)
      cy.get('.error')
        .should('be.visible')
      })
})
