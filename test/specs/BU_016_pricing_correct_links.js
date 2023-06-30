import PricingPage from '../pageobjects/Pricing.page.js';
import HeaderPage from '../pageobjects/Header.page.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Checking correct links in the "Communications", "Wireless", "Networking" and "Storage" block', async () => {
        await HeaderPage.clickPricingLinkMenuItem();
        await HeaderPage.clickPricingSeeAllPricingSubMenuItem();

        await PricingPage.haveUrlMessagingAPI();
        await PricingPage.haveUrlSipTrunking();
        await PricingPage.haveUrlVoiceAPI();
        await PricingPage.haveUrlGlobalNumbers();
        await PricingPage.haveUrlVideoAPI();
        await PricingPage.haveUrlNumberLookupAPI();
        await PricingPage.haveUrlVerifyAPI();
        await PricingPage.haveUrlFaxAPI();
        await PricingPage.haveUrlIoTSIMCard();
        await PricingPage.haveUrlProgrammableNetworking();
        await PricingPage.haveUrlGlobalEdgeRouter();
        await PricingPage.haveUrlStorage();        
      
    })
})


