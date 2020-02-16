/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions

describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      // create alias
      cy.get('.product').as('productLocator') 
      // only find visible elements on the page
      cy.get('@productLocator').should('have.length',5)
      cy.get('.product:visible').should('have.length',4)
      // parent child chaining
      cy.get('.products').find('.product').should('have.length',4)
      // get second element from .product - out of 4
      // find button ADD TO CART
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
         console.log('sf')
      })

      cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
          $el.find('button').click()
        }
      })
      cy.get('.brand').should('have.text', 'GREENKART')

      cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())

      })

    })
  })
