import HeaderPage from '../pageobjects/Header.page.js';
import CustomerStoriesPage from '../pageobjects/CustomerStories.page.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Checking "Read about what our customers are building" block content', async () => {
        await HeaderPage.clickResourcesMenuItem();
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

// //"wdio": "wdio run ./wdio.conf.js",