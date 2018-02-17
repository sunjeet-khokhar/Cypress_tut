// npm run dev to launch the app
// npm run cypress to launch Cypress
describe('Input form',() => {
  beforeEach(() => {
    //cy.visit('http://theiconic.com.au')
  })

  it('searches for a string',() => {
    cy.visit('http://theiconic.com.au')
    const text_to_search = 'levis'
    cy.get('.icon-search').click()
    cy.get('#search-input')
      .type(text_to_search)
      .type('{enter}')
  })

  it('confirms auto correction of search text is present',() => {
    const text_to_search = 'levis'
    cy.get('.did-you-mean')
      .should('exist')
  })

  it('click the drop down',() => {
    cy.get('.dropdown.radius').click()
  })

  it('verify the total count and existence of a particular element in the dropdown',() => {
    // get the element and it's associated children
    cy.get('#sort-by-menu-header > div > ul').children()
      // perform the assertion on existence of a particular item in the drop down
      .should('contain','New Arrivals')
      // perform the assertion on the number of children i.e. options in the drop down
      .and('have.length','6')
    })
  })
