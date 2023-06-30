import EbookVoiceAPIPage from '../pageobjects/EbookVoiceAPI.page.js';
import HeaderPage from '../pageobjects/Header.page.js';
import Constants from '../helper/constants.js';

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();
    })

    it('Verify "Download Your Voice API eBook" form with valid credentials', async () => {
        await HeaderPage.clickProductsLinkMenuItem(); 
        await HeaderPage.clickProductsVoiceAPISubMenuItem();
        await EbookVoiceAPIPage.clickDownloadEbookLink();
        await EbookVoiceAPIPage.setFirstName(Constants.FIRST_NAME);
        await EbookVoiceAPIPage.setLastName(Constants.LAST_NAME);
        await EbookVoiceAPIPage.setCompanyName(Constants.COMPANY);
        await EbookVoiceAPIPage.setEmailAddress(Constants.COMPANY_EMAIL);       
        await EbookVoiceAPIPage.clickSubscription();
        // await EbookVoiceAPIPage.clickSendContent();   
    })
})

