describe('Header Navigation with with Dropdowns - Company tab', () => {
  beforeEach(() => {
    cy.visit('https://pksound.live/');
  });

  it('should navigate to the About Us page', () => {
    cy.get('#t4-header')
      .contains('Company')
      .trigger('mouseover', { force: true });

    cy.get('#t4-header .dropdown-menu').contains('About Us').click();

    cy.url().should('include', '/home/about-us');
  });

  it('should navigate to the Core Technology page', () => {
    cy.get('#t4-header').contains('Company').trigger('mouseover');
    cy.get('#t4-header .dropdown-menu').contains('Core Technology').click();
    cy.url().should('include', '/home/core-technology');
  });

  it('should navigate to the Careers page', () => {
    cy.get('#t4-header').contains('Company').trigger('mouseover');
    cy.get('#t4-header .dropdown-menu').contains('Careers').click();
    cy.url()
      .should('include', '/home/careers')
      .then(() => {
        cy.url().should('eq', 'https://pksound.live/home/careers');
      });
  });

  it('should navigate to the Press page', () => {
    cy.get('#t4-header').contains('Company').trigger('mouseover');

    cy.get('#t4-header .dropdown-menu').contains('Press').click();

    cy.url().should('include', '/home/press');
  });

  it('should navigate to the Contact Us page', () => {
    cy.get('#t4-header').contains('Company').trigger('mouseover');

    cy.get('#t4-header .dropdown-menu').contains('Contact Us').click();

    cy.url().should('include', '/home/contact-us');
  });
});

//---
// import HeaderNavigationCompany from '../../page_objects/HeaderNavigationCompany';

// describe('Header Navigation with Dropdowns - Company tab', () => {
//   const headerCompanyNavigation = HeaderNavigationCompany;

//   beforeEach(() => {
//     cy.visit(headerCompanyNavigation.baseUrl);
//   });

//   it('should navigate to the About Us page', () => {
//     headerCompanyNavigation.navigateToAboutUs();
//     cy.url().should('include', headerCompanyNavigation.aboutUsUrl);
//   });

//   it('should navigate to the Core Technology page', () => {
//     headerCompanyNavigation.navigateToCoreTechnology();
//     cy.url().should('include', headerCompanyNavigation.coreTechnologyUrl);
//   });

//   it('should navigate to the Careers page', () => {
//     headerCompanyNavigation.navigateToCareers();
//     cy.url().should('eq', headerCompanyNavigation.careersUrl);
//   });

//   it('should navigate to the Press page', () => {
//     headerCompanyNavigation.navigateToPress();
//     cy.url().should('include', headerCompanyNavigation.pressUrl);
//   });

//   it('should navigate to the Contact Us page', () => {
//     headerCompanyNavigation.navigateToContactUs();
//     cy.url().should('include', headerCompanyNavigation.contactUsUrl);
//   });
// });
