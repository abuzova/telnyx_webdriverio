import HeaderPage from '../pageobjects/Header.page.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Checking correct the Main menu work', async () => {
        // Products
        await HeaderPage.clickProductsLinkMenuItem();
        await HeaderPage.haveUrlProductsSmsApiSubMenuItem(); 

        /*await HeaderPage.haveUrlProductsGlobalNumbersSubMenuItem();
        await HeaderPage.haveUrlProductsSIPTrunkingSubMenuItem();
        await HeaderPage.haveUrlProductsIoTSIMCardSubMenuItem();
        await HeaderPage.haveUrlProductsVoiceAPISubMenuItem();
        await HeaderPage.haveUrlProductsStorageSubMenuItem();
        await HeaderPage.haveUrlProductsMicrosoftTeamsSubMenuItem();
        await HeaderPage.haveUrlProductsZoomPhoneSubMenuItem();
        await HeaderPage.haveUrlProductsGlobalEdgeRouterSubMenuItem(); 
        await HeaderPage.haveUrlProductsSeeAllProductsSubMenuItem();

        // Solutions
        await HeaderPage.haveUrlSolutionsMenuItem();

        // Pricing
        await HeaderPage.haveUrlPricingMessagingAPISubMenuItem();
        await HeaderPage.haveUrlPricingGlobalNumbersSubMenuItem();
        await HeaderPage.haveUrlPricingSIPTrunkingSubMenuItem();
        await HeaderPage.haveUrlPricingIoTSIMCardSubMenuItem();
        await HeaderPage.haveUrlPricingVoiceAPISubMenuItem();
        await HeaderPage.haveUrlPricingStorageSubMenuItem(); 
        await HeaderPage.haveUrlPricingSeeAllPricingSubMenuItem();
       
        // Why Telnyx
        await HeaderPage.haveUrlWhyTelnyxOverviewSubMenuItem();
        await HeaderPage.haveUrlWhyTelnyxNetworkSubMenuItem();
        await HeaderPage.haveUrlWhyTelnyxMissionControlSubMenuItem();
        await HeaderPage.haveUrlWhyTelnyxPartnersSubMenuItem();
        await HeaderPage.haveUrlWhyTelnyxIntegrationsSubMenuItem();
        await HeaderPage.haveUrlWhyTelnyxGlobalCoverageSubMenuItem();
       
        // Resources
        await HeaderPage.haveUrlResourcesCustomerStoriesSubMenuItem();
        await HeaderPage.haveUrlResourcesBlogSubMenuItem();        
        await HeaderPage.haveUrlResourcesSupportCenterSubMenuItem();

        // Developers
        await HeaderPage.haveUrlDevelopersDevDocsSubMenuItem();
        await HeaderPage.haveUrlDevelopersDevCommunitySubMenuItem();  */      
       
    })
})


