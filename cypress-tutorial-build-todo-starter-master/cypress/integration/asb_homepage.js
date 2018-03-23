// npm run dev to launch the app
// npm run cypress to launch Cypress
describe('ASB home page search flow',() => {

  beforeEach(() => {

  })

  it('opens the ASB homepage and confirms that the title is correct',() => {
    cy.visit('https://www.asb.co.nz')
    cy.title()
      .should('contain','ASB')
  })

  it('opens the ASB homepage and confirms that the various login options are present',() => {
    cy.get('.environment-options').children()
      .should('contain','Online Share Trading')
      .and('contain','FastNet Classic')
      .and('contain','Business')
      .and('have.length','4')
  })

  it('search results should auto populate',() => {
    const text_to_search = 'online trading'
    cy.get('#homeThemePageId > section > div > div.hero-content > div.col.homepage-item-2 > div > div > input')
      .type('kiwisaver')
    cy.get('body > div.component.component--overlay-search.is-active > div > div.search-container > div > div.query-suggestions-container.is-visible > ul')
      .should('exist')
      .and('contain','KiwiSaver')
    cy.visit('https://www.asb.co.nz')
  })

})
