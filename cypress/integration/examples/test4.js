/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions

describe('My fourth Test', function() {
    it('Does not do much!', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice")
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })

      cy.get('#opentab').invoke('removeAttr','target').click()
      
      cy.url().should('include','index')
      
      cy.go('back')

    })
  })
