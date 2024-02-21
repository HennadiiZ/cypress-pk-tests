export default class ContactUsPage {
  visitPage() {
    cy.visit('https://pksound.live/home/contact-us');
  }

  fillContactForm(formData) {
    cy.get('#jform_contact_name').type(formData.name);
    cy.get('#jform_contact_email').type(formData.email);
    cy.get('#jform_contact_emailmsg').type(formData.subject);
    cy.get('#jform_contact_message').type(formData.message);
  }

  submitContactForm() {
    cy.get('.btn.btn-primary.validate').click();
  }

  assertSuccessMessage() {
    cy.get('.alert.alert-message').should('exist');
  }

  assertErrorMessage() {
    cy.get('.alert.alert-error.alert-danger').should('exist');
  }
}
