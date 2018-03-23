// npm run dev to launch the app
// npm run cypress to launch Cypress
describe('Air NZ flight search',() => {

  beforeEach(() => {

  })

  it('opens Air NZ home page and confirms that the title is correct',() => {
    cy.visit('https://flightbookings.airnewzealand.co.nz/vbook/actions/search')
    cy.title()
      .should('contain','Air New Zealand')
  })

  it('enters the location of origin',() => {
    cy.get('#depart-from')
      .type('Christchurch')
//      .should('contain','Christchurch')
})

  it('enters the location of the destination',() => {
    cy.get('#depart-to')
      .type('Vancouver')
  })

/*  it('selects the next month from current date',() => {
    cy.get('#leaveDate')
      .click()
    cy.get('.main')
      .should('exist')
    cy.get('.arrowright')
      .click()
    cy.get('#calendarpanel-1 > .monthselector > .col-xs-8 > .form-control')
      .should('have.value','2018-04-01')
  })*/

  it('enters current date as depature date',() => {
    cy.get('#leaveDate').type('2018-03-11')
  })

  it('enters current date plus 1 month as return date',() => {
    cy.get('#returnDate').type('2018-04-11')
    //cy.get('.close-refresh').click()
  })

  it('cliks the search button',() => {
    cy.get('.vui-submission > .btn').click({force:true})
    cy.url().should('include','flightbookings.airnewzealand.co.nz1')
  })

})
