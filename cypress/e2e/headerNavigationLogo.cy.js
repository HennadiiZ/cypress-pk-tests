describe('Header Navigation with Logo link', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('https://pksound.live/');
  });

  // LOGO
  it('should navigate to the Home page', () => {
    cy.get('#t4-header a[href="https://pksound.live/"]').click();

    cy.url()
      .should('include', 'https://pksound.live/')
      .then(() => {
        cy.url().should('eq', 'https://pksound.live/');
      });
  });
});
