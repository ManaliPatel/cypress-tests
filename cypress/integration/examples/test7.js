/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions

describe('My fourth Test', function() {
    it('Does not do much!', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice")
      cy.get('#opentab').then(function(e1){
          const url = e1.prop('href')
          cy.visit(url)
      })
    })
  })
