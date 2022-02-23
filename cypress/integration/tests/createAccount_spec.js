/// <reference types="cypress" />
import HomePage from '../pages/homePage'

const home = new HomePage()

beforeEach(() => {
    cy.visit('/')
})

it('Verify user can create a new account and complete registration process', function() {
    home.navigateToAccountCreationPage()  
        .createAccount()
        .verifyAccountCreationWasSuccessful()
})