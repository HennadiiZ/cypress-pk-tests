// cypress/integration/contactForm.spec.js

describe('Contact Us Form', () => {
  beforeEach(() => {
    cy.visit('https://pksound.live/home/contact-us');
  });

  it('should submit the contact form successfully', () => {
    cy.get('#jform_contact_name').type('John Doe');
    cy.get('#jform_contact_email').type('john.doe@example.com');
    cy.get('#jform_contact_emailmsg').type('This is a test subject');
    cy.get('#jform_contact_message').type('This is a test message');

    cy.get('.btn.btn-primary.validate').click();

    cy.get('.alert.alert-message').should('exist');
  });

  it('should display an error message for incomplete form submission', () => {
    cy.get('.btn.btn-primary.validate').click();

    cy.get('.alert.alert-error.alert-danger').should('exist');
  });
});
