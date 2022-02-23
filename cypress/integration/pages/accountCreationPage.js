import Common from "../global/helpers/common"
import LandingPage from "./landingPage"

const common = new Common

class AccountCreationPage {

    // Locators
    firstNameInput = '#firstName'
    lastNameInput = '#lastName'
    emailInput = '#email'
    passwordInput = '#password'
    confirmPasswordInput = '#confirmPassword'
    notInvestorRdoBtn = '#accreditedNo'
    agreeToTermsChkBx = '#hasAgreedTos'
    captchaChkBx = '#recaptcha-anchor-label'
    createAccountBtn = '.box-border'
    reCaptcha = '[title="reCAPTCHA"]'

    createAccount() {
        cy.get(this.firstNameInput).type(common.firstName)
            .get(this.lastNameInput).type(common.lastName)
            .get(this.emailInput).type(common.generateRandomEmail(10))
            .get(this.passwordInput).type(common.password)
            .get(this.confirmPasswordInput).type(common.password)
            .get(this.notInvestorRdoBtn).click()
            .get(this.agreeToTermsChkBx).click().then(() => {
                cy.get(this.reCaptcha)
                .then(iframe => {
                  const body = iframe.contents().find('body')
                  cy.wrap(body)
                    .find(this.captchaChkBx)
                    .should('be.visible')
                    .click().then(() => {
                        cy.get(this.createAccountBtn, { timeout: 10000 }).should('be.enabled');
                        cy.get(this.createAccountBtn).contains(this.createAccountText).click()

                        
                    })
                })
            })
            return new LandingPage
    }
}

export default AccountCreationPage