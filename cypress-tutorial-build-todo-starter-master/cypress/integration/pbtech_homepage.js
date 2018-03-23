// npm run dev to launch the app
// npm run cypress to launch Cypress
describe('Login_flow',() => {

  beforeEach(() => {

  })

  it('opens the ASB homepage and confirms that the title is correct',() => {
    cy.visit('https://www.asb.co.nz')
    cy.title()
      .should('contain','ASB')
      .get('.environment-options').children()
      .should('contain','Online Share Trading')
      .should('contain','FastNet Classic')
      .should('contain','Business')
      .should('have.length','3')
  })



})
