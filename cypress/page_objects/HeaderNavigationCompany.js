// 1
// export default class HeaderNavigationCompany {
//   navigateToAboutUs() {
//     this.hoverOverCompanyTab();
//     cy.get('.dropdown-menu').contains('About Us').click();
//   }

//   navigateToCoreTechnology() {
//     this.hoverOverCompanyTab();
//     cy.get('.dropdown-menu').contains('Core Technology').click();
//   }

//   navigateToCareers() {
//     this.hoverOverCompanyTab();
//     cy.get('.dropdown-menu').contains('Careers').click();
//   }

//   navigateToPress() {
//     this.hoverOverCompanyTab();
//     cy.get('.dropdown-menu').contains('Press').click();
//   }

//   navigateToContactUs() {
//     this.hoverOverCompanyTab();
//     cy.get('.dropdown-menu').contains('Contact Us').click();
//   }

//   hoverOverCompanyTab() {
//     cy.get('#t4-header').contains('Company').trigger('mouseover');
//   }
// }
class HeaderNavigationCompany {
  get baseUrl() {
    return 'https://pksound.live/'; // Change this to your actual base URL
  }

  hoverOverCompanyTab() {
    cy.get('#t4-header').contains('Company').trigger('mouseover');
  }

  navigateToMenuItem(menuItem) {
    this.hoverOverCompanyTab();
    cy.get('.dropdown-menu').contains(menuItem).click();
  }

  navigateToAboutUs() {
    this.navigateToMenuItem('About Us');
  }

  navigateToCoreTechnology() {
    this.navigateToMenuItem('Core Technology');
  }

  navigateToCareers() {
    this.navigateToMenuItem('Careers');
  }

  navigateToPress() {
    this.navigateToMenuItem('Press');
  }

  navigateToContactUs() {
    this.navigateToMenuItem('Contact Us');
  }
}

export default new HeaderNavigationCompany();
