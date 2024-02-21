import HeaderLogo from '../../page_objects/HeaderLogo';

describe('Header Navigation with Logo link', () => {
  const headerLogoInstance = new HeaderLogo();

  beforeEach(() => {
    headerLogoInstance.visitHomePage();
  });

  it('should navigate to the Home page', () => {
    headerLogoInstance.clickLogoLink();
    headerLogoInstance.assertHomePageUrl();
  });
});
