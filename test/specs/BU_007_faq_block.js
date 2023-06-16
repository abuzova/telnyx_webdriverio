import FAQBlockPagePage from '../pageobjects/FAQBlock.page.js'
import HeaderPage from '../pageobjects/Header.page.js'
import Constants from '../helper/constants.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open();
        await HeaderPage.clickCloseButton();
    })

    it('Testing "Frequently Asked Questions" block work', async () => {
        await HeaderPage.clickProductsLinkMenuItem();
        await HeaderPage.clickProductsSIPTrunkingSubMenuItem();



        /*await ElasticSipPage.setFirstName(Constants.FIRST_NAME);
        await ElasticSipPage.setLastName(Constants.LAST_NAME);
        await ElasticSipPage.setBusinessEmail(Constants.COMPANY_EMAIL);
        await ElasticSipPage.clickSubscription();   */           
        // await ContactUsPage.clickSubmit();

    })
})

