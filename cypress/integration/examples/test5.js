/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions

describe('My fourth Test', function() {
    it('Does not do much!', function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice")
      cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
          const text = $e1.text()
          if(text.includes("Python")) {
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                 const priceText =  price.text()
                 expect(priceText).to.equal('25')
              })
          }
      })
      
    })
  })
