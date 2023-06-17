import PartnershipsPage from '../pageobjects/Partnerships.page.js'
import HeaderPage from '../pageobjects/Header.page.js'
import Constants from '../helper/constants.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open();
        await HeaderPage.clickCloseButton();
    })

    it('Verify "Become a Telnyx partner" form with valid credentials', async () => {
        await HeaderPage.clickProductsLinkMenuItem();
        await HeaderPage.clickPartnersWhyTelnyxSubMenuItem();

        await PartnershipsPage.setFirstName(Constants.FIRST_NAME);
        await PartnershipsPage.setLastName(Constants.LAST_NAME);
        await PartnershipsPage.setCompany(Constants.COMPANY);
        await PartnershipsPage.setBusinessEmail(Constants.COMPANY_EMAIL);
        await PartnershipsPage.selectCountry(Constants.COUNTRY);
        await PartnershipsPage.setPhoneNumber(Constants.PHONE_NUMBER);
        await PartnershipsPage.selectPartnerType(Constants.PARTNER_TYPE);
        await PartnershipsPage.setWhyTelnyxPartner(Constants.WHY_TELNYX_PARTNER);
        await PartnershipsPage.clickSubscription();
        // await PartnershipsPage.clickApplyNow();   
    })
})


