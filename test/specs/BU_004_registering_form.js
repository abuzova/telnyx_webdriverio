import RegisterFormPage from '../pageobjects/RegisterForm.page.js'
import HeaderPage from '../pageobjects/Header.page.js'
import Constants from '../helper/constants.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await RegisterFormPage.open();
        await RegisterFormPage.clickCloseButton();
    })

    it('Verify registering form with valid credentials', async () => {
        await HeaderPage.clickSignUpLink();
        await RegisterFormPage.setCompanyEmail(Constants.COMPANY_EMAIL);
        await RegisterFormPage.setFirstName(Constants.FIRST_NAME);
        await RegisterFormPage.setLastName(Constants.LAST_NAME);
        await RegisterFormPage.setPassword(Constants.PASSWORD);
        await RegisterFormPage.checkPrivacyPolicy();
        await RegisterFormPage.checkSubscription();
        // await RegisterFormPage.clickSignUp();        
    })
})