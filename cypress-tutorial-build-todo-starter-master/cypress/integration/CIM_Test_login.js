// npm run cypress to launch Cypress
describe('CIM-Test SSO login',() => {

  beforeEach(() => {

  })

  it('opens the CIM homepage and confirms that the title is correct',() => {
    //cy.visit('https://cim-test.zendesk.com/agent/')
    //cy.visit('https://login.microsoftonline.com')
    cy.title()
      .should('contain','Sign in to your account')
  })

})
