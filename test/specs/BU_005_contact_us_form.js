import ContactUsPage from '../pageobjects/ContactUs.page.js'
import HeaderPage from '../pageobjects/Header.page.js'
import Constants from '../helper/constants.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open();
        await HeaderPage.clickCloseButton();
    })

    it('Verify contact us form with valid credentials', async () => {
        await HeaderPage.clickContactUsLink();
        await ContactUsPage.setHowHelp(Constants.HOW_HELP);
        await ContactUsPage.setFirstName(Constants.FIRST_NAME);
        await ContactUsPage.setLastName(Constants.LAST_NAME);
       //await ContactUsPage.setInputPassword(Constants.PASSWORD);
        await ContactUsPage.setEmail(Constants.COMPANY_EMAIL);
        await ContactUsPage.setCountry(Constants.COUNTRY);
        await ContactUsPage.setPhoneNumber(Constants.PHONE_NUMBER);
        await ContactUsPage.setCompanyWebsite(Constants.COMPANY_WEB_SITE);
        await ContactUsPage.setPrimaryInterest(Constants.PRIMARY_INTEREST);
        await ContactUsPage.setPleaseDescribeRequest(Constants.DESCRIBE_REQUEST);
        await ContactUsPage.setHowDidYouHear(Constants.HOW_DID_YOU_HEAR);
        await ContactUsPage.checkSubscription();
        // await ContactUsPage.clickSubmit();

    })
})