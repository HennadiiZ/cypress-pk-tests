describe('Header Navigation with Dropdowns', () => {
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

  // COMPANY
  // Company --> About Us | Core Technology | Careers | Press | Contact Us
  it('should navigate to the About Us page', () => {
    // Hover over the Company button in the header
    cy.get('#t4-header')
      .contains('Company')
      .trigger('mouseover', { force: true });

    // Click on the 'About Us' link within the dropdown
    cy.get('#t4-header .dropdown-menu').contains('About Us').click();

    // Check if the URL matches the expected URL of the About Us page
    cy.url().should('include', '/home/about-us');
  });

  it('should navigate to the Core Technology page', () => {
    // Hover over the Company button in the header
    cy.get('#t4-header').contains('Company').trigger('mouseover');

    // Click on the 'Core Technology' link within the dropdown
    cy.get('#t4-header .dropdown-menu').contains('Core Technology').click();

    // Check if the URL matches the expected URL of the Core Technology page
    cy.url().should('include', '/home/core-technology');
  });

  it('should navigate to the Careers page', () => {
    // Hover over the Company button in the header
    cy.get('#t4-header').contains('Company').trigger('mouseover');

    // Click on the 'Careers' link within the dropdown
    cy.get('#t4-header .dropdown-menu').contains('Careers').click();

    // Check if the URL matches the expected URL of the Careers page
    // cy.url().should('include', '/home/careers');

    // Use .then() to wait for the navigation to complete before checking the URL
    cy.url()
      .should('include', '/home/careers')
      .then(() => {
        cy.url().should('eq', 'https://pksound.live/home/careers');
      });
  });

  it('should navigate to the Press page', () => {
    // Hover over the Company button in the header
    cy.get('#t4-header').contains('Company').trigger('mouseover');

    // Click on the 'Press' link within the dropdown
    cy.get('#t4-header .dropdown-menu').contains('Press').click();

    // Check if the URL matches the expected URL of the Press page
    cy.url().should('include', '/home/press');
  });

  it('should navigate to the Contact Us page', () => {
    // Hover over the Company button in the header
    cy.get('#t4-header').contains('Company').trigger('mouseover');

    // Click on the 'Contact Us' link within the dropdown
    cy.get('#t4-header .dropdown-menu').contains('Contact Us').click();

    // Check if the URL matches the expected URL of the Contact Us page
    cy.url().should('include', '/home/contact-us');
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

  // PRODUCT
  // Product -->
});

// Company --> About Us | Core Technology | Careers | Press | Contact Us
// Application --> Touring & Festival | Performance Installation
// Product --> Trinity black | T10 | T218 | PK Cell | T8 | T18 | PK Cell | Trinity Install | T10 Install | T218 Install | G30 Install | .dynamics
// Education --> Overview | Video Modules
// Support
// PK alliance

// headerNavigationSupport.cy.js
// headerNavigationPKalliance.cy.js
