export default class HeaderLogo {
  visitHomePage() {
    cy.visit('https://pksound.live/');
  }

  clickLogoLink() {
    cy.get('#t4-header a[href="https://pksound.live/"]').click();
  }

  assertHomePageUrl() {
    cy.url().should('include', 'https://pksound.live/');
  }
}
