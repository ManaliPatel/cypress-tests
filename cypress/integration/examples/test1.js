/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions

describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.get('.product:visible').should('have.length',4)
      

    })
  })
