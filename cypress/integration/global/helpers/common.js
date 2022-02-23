
class Common {

    // Static Data
    firstName = 'First'
    lastName = 'Last'
    email = 'test@gmail.com'
    password = 'Password123!'
    createAccountText = 'Create an account'

    // Endpoints
    accountCreationPageEndpoint = '/invexp/accounts/create-account/'
    landingPageEndpoint = '/invexp/properties/all'

    generateRandomEmail(length) {
        let result = ''
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result + '@test.com';
    }
}

export default Common