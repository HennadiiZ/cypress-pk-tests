describe('Header Navigation with with Dropdowns', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('https://pksound.live/');
  });

  // APPLICATION
  // Application --> Touring & Festival | Performance Installation

  it('should navigate to Touring & Festival page', () => {
    cy.get('#t4-header')
      .contains('Application')
      .trigger('mouseover', { force: true });
    cy.get('#t4-header .dropdown-menu')
      .contains('Touring & Festival')
      .click({ force: true });
    cy.wait(1000);
    cy.url().should('include', '/application/touring-and-festivals');
  });

  it('should navigate to Performance Installation page', () => {
    cy.get('#t4-header')
      .contains('Application')
      .trigger('mouseover', { force: true });
    cy.get('#t4-header .dropdown-menu')
      .contains('Performance Installation')
      .click();
    cy.url().should('include', '/application/performance-installation');
  });
});
