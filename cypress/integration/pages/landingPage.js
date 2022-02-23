import AccountCreationPage from "./accountCreationPage";
import Common from "../global/helpers/common";

const common = new Common

class LandingPage {

    userButton = '.user-button .head-link'

    verifyAccountCreationWasSuccessful() {
        cy.url().should('include', common.landingPageEndpoint)
        cy.get(this.userButton).should('contain.text', `Hi ${common.firstName}`)

        return this
    }
}    

export default LandingPage