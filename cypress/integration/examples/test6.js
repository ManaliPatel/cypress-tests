/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions

describe('My fourth Test', function() {
    it('Does not do much!', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    //   cy.get('div.mouse-hover-content').invoke('show')
    //   cy.contains('Top').click()
    
     // below command with force: true verifies hidden element.
      cy.contains('Top').click({force: true})
      cy.url().should('include','top')
    })
  })
