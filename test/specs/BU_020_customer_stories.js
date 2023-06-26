import HeaderPage from '../pageobjects/Header.page.js';
import CustomerStoriesPage from '../pageobjects/CustomerStories.page.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Verify "2023 SMS Deliverability eBook" form with valid credentials', async () => {
        await HeaderPage.clickResourcesLinkMenuItem();
        await HeaderPage.clickCustomerStoriesResourcesSubMenuItem();

        await CustomerStoriesPage.haveUpmarketLink();    
        await CustomerStoriesPage.haveReplicantLink();        
        await CustomerStoriesPage.haveWeaveLink();    
        await CustomerStoriesPage.haveLightspeedLink();    
        await CustomerStoriesPage.haveOomaLink();    
        await CustomerStoriesPage.haveDocumoLink();    
        await CustomerStoriesPage.haveClairGlobalLink();
        await CustomerStoriesPage.haveXpedeusLink();
        await CustomerStoriesPage.haveWillieHoweLink();
        await CustomerStoriesPage.haveFreedomParkLink();
        await CustomerStoriesPage.havePointBlankPoliticalLink();
        await CustomerStoriesPage.haveDataVoiceOptionsLink();
        await CustomerStoriesPage.haveFetchLink();
        await CustomerStoriesPage.haveTalentifyLink(); 
    })
})