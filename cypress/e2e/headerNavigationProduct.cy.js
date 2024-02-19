// headerNavigationProduct.cy.js

describe('Product Dropdown', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('https://pksound.live/');
  });

  it('should navigate to Alliance Mobile > Trinity Black page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-1').contains('Trinity Black').click();
    cy.url().should('include', '/product/alliance/loudspeakers/trinity');
  });

  it('should navigate to Alliance Mobile > T10 page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-1').contains('T10').click();
    cy.url().should('include', '/product/alliance/loudspeakers/t10');
  });

  it('should navigate to Alliance Mobile > T218 page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-1').contains('T218').click();
    cy.url().should('include', '/product/alliance/loudspeakers/t218');
  });

  it('should navigate to Alliance Mobile > PK Cell page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-1').contains('PK Cell').click();
    cy.url().should('include', '/product/alliance/pk-cell');
  });

  it('should navigate to Mobile > T8 page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-2').contains('T8').click();
    cy.url().should('include', '/product/mobile/t8');
  });

  it('should navigate to Mobile > T18 page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-2').contains('T18').click();
    cy.url().should('include', '/product/mobile/t18');
  });

  it('should navigate to Mobile > PK Cell page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-2').contains('PK Cell').click();
    cy.url().should('include', '/product/alliance/pk-cell');
  });

  it('should navigate to Installation > Trinity Install page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-3').contains('Trinity Install').click();
    cy.url().should('include', '/product/legacy/trinity-install');
  });

  it('should navigate to Installation > T10 Install page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-3').contains('T10 Install').click();
    cy.url().should('include', '/product/legacy/t10-install');
  });

  it('should navigate to Installation > T218 Install page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-3').contains('T218 Install').click();
    cy.url().should('include', '/product/legacy/t218-install');
  });

  it('should navigate to Installation > G30 Install page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-3').contains('G30 Install').click();
    cy.url().should('include', '/product/legacy/g30-install');
  });

  it('should navigate to Software > .dynamics page', () => {
    cy.get('#t4-header').contains('Product').trigger('mouseover');
    cy.get('.mega-sub-4').contains('.dynamics').click();
    cy.url().should('include', '/product/dynamics');
  });
});

// describe('Product Dropdown', () => {
//   beforeEach(() => {
//     // Visit the page before each test
//     cy.visit('https://pksound.live/');
//   });

//   it('should navigate to Alliance Mobile > Trinity Black page', () => {
//     // Hover over the Product button in the header
//     cy.get('#t4-header').contains('Product').trigger('mouseover');

//     // Click on the 'Trinity Black' link within the Alliance Mobile sub-menu
//     cy.get('.mega-sub-1').contains('Trinity Black').click();

//     // Check if the URL matches the expected URL
//     cy.url().should('include', '/product/alliance/loudspeakers/trinity');
//   });

//   it('should navigate to Mobile > T8 page', () => {
//     // Hover over the Product button in the header
//     cy.get('#t4-header').contains('Product').trigger('mouseover');

//     // Click on the 'T8' link within the Mobile sub-menu
//     cy.get('.mega-sub-2').contains('T8').click();

//     // Check if the URL matches the expected URL
//     cy.url().should('include', '/product/mobile/t8');
//   });

//   it('should navigate to Installation > Trinity Install page', () => {
//     // Hover over the Product button in the header
//     cy.get('#t4-header').contains('Product').trigger('mouseover');

//     // Click on the 'Trinity Install' link within the Installation sub-menu
//     cy.get('.mega-sub-3').contains('Trinity Install').click();

//     // Check if the URL matches the expected URL
//     cy.url().should('include', '/product/legacy/trinity-install');
//   });

//   it('should navigate to Software > .dynamics page', () => {
//     // Hover over the Product button in the header
//     cy.get('#t4-header').contains('Product').trigger('mouseover');

//     // Click on the '.dynamics' link within the Software sub-menu
//     cy.get('.mega-sub-4').contains('.dynamics').click();

//     // Check if the URL matches the expected URL
//     cy.url().should('include', '/product/dynamics');
//   });
// });
