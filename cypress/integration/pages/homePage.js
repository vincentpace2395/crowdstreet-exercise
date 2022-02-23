import AccountCreationPage from "./accountCreationPage";
import Common from '../global/helpers/common';

const common = new Common

class HomePage {

    navigateToAccountCreationPage() {
        cy.visit(common.accountCreationPageEndpoint)

        return new AccountCreationPage
    }
}

export default HomePage