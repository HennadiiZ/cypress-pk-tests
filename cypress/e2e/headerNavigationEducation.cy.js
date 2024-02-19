// headerNavigationEducation.cy.js

describe('Education Dropdown', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('https://pksound.live/');
  });

  it('should navigate to Education > Overview page', () => {
    cy.get('#t4-header').contains('Education').trigger('mouseover');
    cy.get('.dropdown-menu.level1').contains('Overview').click();
    cy.url().should('include', '/education/overview');
  });

  it('should navigate to Education > Video Modules page', () => {
    cy.get('#t4-header').contains('Education').trigger('mouseover');
    cy.get('.dropdown-menu.level1').contains('Video Modules').click();
    cy.url().should('include', '/education/education-video-modules');
  });
});
