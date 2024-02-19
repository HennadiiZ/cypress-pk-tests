// headerNavigationSupport.cy.js

// due to the link opening in a new tab, which Cypress is not be able to track.

// describe('Support Link', () => {
//   it('should navigate to Support page', () => {
//     cy.window().then((win) => {
//       cy.stub(win, 'open').as('windowOpen');
//     });

//     cy.visit('https://pksound.live/');

//     cy.get('#t4-header')
//       .contains('Support')
//       .invoke('removeAttr', 'target')
//       .click();

//     cy.get('@windowOpen').should(
//       'be.calledWith',
//       'https://pksound.odoo.com/helpdesk/'
//     );
//   });
// });
