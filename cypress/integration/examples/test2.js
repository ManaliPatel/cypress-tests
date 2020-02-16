/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions

describe('My Second Test', function() {
    it('Does not do much!', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(1000)
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
          $el.find('button').click()
        }
      })
      cy.get('.cart-icon > img').click()
      cy.wait(3000)
      // cy.get('.cart-preview button').click()
      //  https://github.com/cypress-io/cypress/issues/1244
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/cart')
      cy.contains('Place Order').click()
    })
  })
