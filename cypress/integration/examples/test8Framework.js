/// <reference types="Cypress" /> 
// if you add header to this file - it will load autosuggestions
import HomePage from './pageObjects/HomePage'
describe('My fourth Test', function() {

    before(function(){
        cy.fixture('example').then(function(data) {
            //initialized object this.data
            this.data=data
        })
    })

    it('Does not do much!', function() {
      const homePage = new HomePage()
      cy.visit("https://rahulshettyacademy.com/angularpractice/")
      homePage.getEditBox().type(this.data.name)
      homePage.getGender().select(this.data.gender)
      homePage.getTwoWayDataBinding().should('have.value', this.data.name)
      homePage.getEditBox().should('have.attr','minlength','2')
      homePage.getEntre().should('be.disabled')

      homePage.getShopTab().click()

      this.data.productName.forEach(function(element){
            cy.selectProduct(element)
      })


    })
})

  