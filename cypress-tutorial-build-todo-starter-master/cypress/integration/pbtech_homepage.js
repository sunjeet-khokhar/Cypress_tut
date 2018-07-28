// npm run dev to launch the app
// npm run cypress to launch Cypress
/// <reference types="Cypress" />
describe('Login_flow',() => {

  beforeEach(() => {

  })

  it('opens the PBTech homepage and confirms that the title is correct',() => {
    cy.visit('https://www.pbtech.co.nz')
    cy.title()  
      .should('contain','PBTech')
      // find a web element
      .get("#header > div > div > div:nth-child(2) > div > div.headButtons > div.header_button_float.logMenu > div > a.underLine")
      .should('be.visible')
      // assert that the element's text matches a reg ex
      .should(($txt) => {
        const text = $txt.text()
        expect(text).to.match(/Login/)
      })
      .click()
      .get('#newRegForm > input')
      .contains('Sign In')
      .get('#try_login').type('sunjeet81@gmail.com')
      .get('#try_pass').type('yorks64')
      .get('#newRegForm > .button').click()
    //  .get('.whtLink')
    //expect(accountName).to.have.property('text','sunjeet')
  })

  it('verifies account name',() => {
    //cy.get('.whtLink').should('contain','sunjeet1')
    cy.get('.whtLink').should(($el) => {
      const text = $el.text()
      expect(text).to.match(/sunjeet/)
    })
  })

  it('verifies that product search is succesfull ',() => {
    cy.get('#searchBox').type('iphone')
    cy.get('.search_button > .fa').click()
    cy.get('.apple_nav_active').should('exist')
  })
})
