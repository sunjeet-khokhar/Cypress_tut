// npm run dev to launch the app
// npm run cypress to launch Cypress
describe('Login_flow',() => {

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("eve_access","__cfduid","__zlcmid","_ga","browserDetection","Acxiom","PHPSESSID_11c82b2f5afa71b5cc0108c076f018e5","_scid","_sctr","eve_access","interstitial_already_viewed","ti_flags")
    cy.setCookie('browserDetection', 'eyJ0eXBlIjoiYnJvd3NlciIsIm5hbWUiOiJDaHJvbWUiLCJjc3NDbGFzcyI6ImNocm9tZSIsInZlcnNpb24iOiI2MyJ9')
    cy.setCookie('Acxiom','1')
    cy.setCookie('PHPSESSID_11c82b2f5afa71b5cc0108c076f018e5','3f79ba6487219fcd57f042f3f40ce5df')
    cy.setCookie('_scid','9ab27de6-7058-4b3b-8119-69bccbe687fe')
    cy.setCookie('eve_access','%7B%22user%22%3A%7B%22access_token%22%3A%229e6630d082d0fc9236f81b45d0433c7d09aed9d5%22%2C%22refresh_token%22%3A%22fc0216cbc2d2da0ea0b24003f7bf13eda840a6df%22%2C%22token_type%22%3A%22Bearer%22%2C%22scope%22%3A%22user%22%2C%22client_id%22%3A%22website%22%2C%22csrf_token%22%3A%227e715d02047aba798d7db20d7dada875533cc195%22%2C%22expires_in%22%3A3600%7D%7D')
    cy.setCookie('interstitial_already_viewed','1')
    cy.setCookie('ti_flags','{"hotjar":true}')
  })

  it('open the login page and enter user name',() => {
    cy.visit('https://www.theiconic.com.au/customer/account/login/')
    const user_name = 'sunjeet81@gmail.com'
    cy.get('#LoginForm_email')
      .should('exist')
      .type(user_name)
  })

  it('enter password and click login button',() => {
    const password = 'yorks64'
    cy.get('#LoginForm_password')
      .should('exist')
      .type(password)
    cy.get('#LoginForm_submit')
      .click()
  })

  it('verify succesfull login',() => {
    //cy.get('#top-page > header > div > div.account-menu.active > ul > li.user-action.logout > a')
    cy.get('#top-page > header > div > div.topbar.text-center > ul.left.secondary-links > li:nth-child(1) > a > span:nth-child(2)')
      .should('exist')
      .and('have.text','SK')
  })

  it('should log you out',() => {
    cy.get('#top-page > header > div > div.topbar.text-center > ul.left.secondary-links > li:nth-child(1) > a > span:nth-child(2)')
      .click()
      .get('#top-page > header > div > div.account-menu.active > ul > li.user-action.logout > a')
      .click()
      .get('#LoginForm_submit')
      .should('exist')
  })
  
})
