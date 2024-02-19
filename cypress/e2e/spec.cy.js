// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// cypress/integration/contactForm.spec.js

describe('Contact Us Form', () => {
  beforeEach(() => {
    // Visit the contact us page before each test
    cy.visit('https://pksound.live/home/contact-us');
  });

  it('should submit the contact form successfully', () => {
    // Fill out the form fields
    cy.get('#jform_contact_name').type('John Doe');
    cy.get('#jform_contact_email').type('john.doe@example.com');
    cy.get('#jform_contact_emailmsg').type('This is a test subject');
    cy.get('#jform_contact_message').type('This is a test message');

    // Submit the form
    // cy.get('#submit').click();
    cy.get('.btn.btn-primary.validate').click();

    // Check for a success message or any indication of a successful form submission
    // cy.get('.success-message').should('exist');
    cy.get('.alert.alert-message').should('exist');
    // alert alert-message
  });

  it('should display an error message for incomplete form submission', () => {
    // Submit the form without filling out any fields

    // cy.get('#submit').click();
    cy.get('.btn.btn-primary.validate').click();

    // Check for error messages related to required fields
    // cy.get('.error-message').should('exist');
    cy.get('.alert.alert-error.alert-danger').should('exist');
    // alert alert-error alert-danger
  });

  // Add more tests for different scenarios, such as validation checks, error handling, etc.
});
