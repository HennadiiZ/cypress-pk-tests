import ContactUsPage from '../../page_objects/ContactUsPage';
import { validFormData } from '../../fixtures/contactFormData.json';

describe('Contact Us Form', () => {
  const contactUsPage = new ContactUsPage();

  beforeEach(() => {
    contactUsPage.visitPage();
  });

  it('should submit the contact form successfully', () => {
    // const validFormData =
    //   require('../../fixtures/contactFormData.json').validFormData;

    contactUsPage.fillContactForm(validFormData);
    contactUsPage.submitContactForm();
    contactUsPage.assertSuccessMessage();
  });

  it('should display an error message for incomplete form submission', () => {
    contactUsPage.submitContactForm();
    contactUsPage.assertErrorMessage();
  });
});
