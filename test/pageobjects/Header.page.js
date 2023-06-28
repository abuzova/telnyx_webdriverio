import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HeaderPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logInLink() {
        return $('header>div>div>div>div>a:nth-child(2)');
    } 
    
    get signUpLink(){
        return $('header>div>div>div:nth-child(4)>a');
    }

    get contactUsLink(){
        return $('header>div>div>div>div>a:nth-child(1)');
    }

    // Main menu

    // Products block
    // Products
    get productsMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Products"]');
    }

    get productSubBlock(){
        return $('header div>nav div:nth-child(2) div[data-radix-popper-content-wrapper]');
    }

    //SMS API
    get productsSmsApiSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="SMS API"]');
    }

    //Global Numbers
    get productsGlobalNumbersSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Global Numbers"]');
    }

    // SIP Trunking
    get productsSIPTrunkingSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="SIP Trunking"]');
    }

    // IoT SIM Card
    get productsIoTSIMCardSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="IoT SIM Card"]');
    }

    // Voice API
    get productsVoiceAPISubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Voice API"]');
    }        
        
    // Storage
    get productsStorageSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Storage"]');
    }

    // Microsoft Teams
    get productsMicrosoftTeamsSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Microsoft Teams"]');
    }

    // Zoom Phone
    get productsZoomPhoneSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Zoom Phone"]');
    }

    // Global Edge Router
    get productsGlobalEdgeRouterSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Global Edge Router"]');
    } 

    // See all products
    get productsSeeAllProductsSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="See all products"]');
    }

    // Pricing block
    // Pricing
    get pricingMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Pricing"]');
    }

    get pricingSubBlock(){
        return $('header div>nav div:nth-child(7) div[data-radix-popper-content-wrapper]');
    } 

    // Messaging API
    get pricingMessagingAPISubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Messaging API"]');
    } 

    // Global Numbers
    get pricingGlobalNumbersSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Global Numbers"]');
    } 

    // SIP Trunking
    get pricingSIPTrunkingSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="SIP Trunking"]');
    }
    
    // IoT SIM Card
    get pricingIoTSIMCardSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="IoT SIM Card"]');
    } 

    // Voice API
    get pricingVoiceAPISubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Voice API"]');
    } 

    // Storage
    get pricingStorageSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Storage"]');
    } 

    // See all pricing
    get pricingSeeAllPricingSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="See all pricing"]');
    } 

    // Solutions

    get solutionsMenuItem(){
        return $('//nav/a/span[contains(text(), "Solutions")]');
    }
    

    // Why Telnyx block
    // Why Telnyx
    get whyTelnyxMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Why Telnyx"]');
    }
    
    get whyTelnyxSubBLock(){
        return $('header div>nav div:nth-child(11) div[data-radix-popper-content-wrapper]');
    }

    // Overview
    get whyTelnyxOverviewSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Overview"]');
    }

    // Network
    get whyTelnyxNetworkSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Network"]');
    }
    // Mission Control
    get whyTelnyxMissionControlSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Mission Control"]');
    }

    // Partners
    get whyTelnyxPartnersSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Partners"]');
    }
        
    // Integrations
    get whyTelnyxIntegrationsSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Integrations"]');
    }

    // Global coverage
    get whyTelnyxGlobalCoverageSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Global coverage"]');
    }   
   
    //  Resources block
    // Resources
    get resourcesMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Resources"]');
    }
    
    get resourcesSubBlock(){
        return $('header div>nav div:nth-child(14) div[data-radix-popper-content-wrapper]');
    }

    // Customer Stories
    get resourcesCustomerStoriesSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Customer Stories"]');
    } 

    // Blog
    get resourcesBlogSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Blog"]');
    } 

    // Support Center
    get resourcesSupportCenterSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Support Center"]');
    } 
     
    // Developers block
    // Developers
    get developersMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Developers"]');
    } 

    get developersSubBlock(){
        return $('header div>nav div:nth-child(17) div[data-radix-popper-content-wrapper]');
    }

    // Dev Docs
    get developersDevDocsSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Dev Docs"]');
    } 

    // Dev Community
    get developersDevCommunitySubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Dev Community"]');
    } 



    async clickLogIn(){
        await this.logInLink.click();
        await browser.switchWindow('Telnyx Customer Portal'); 
        await expect(browser).toHaveUrlContaining('sign-in');  
    } 
    
    async clickSignUpLink(){
        await this.signUpLink.click();
        //await browser.switchWindow('Telnyx Customer Portal'); 
        await expect(browser).toHaveUrlContaining('sign-up');  
    }

    async clickContactUsLink(){
        await this.contactUsLink.click();
        await expect(browser).toHaveUrlContaining('contact-us');  
    }

    // Main menu 

    // Products
    async clickProductsLinkMenuItem(){
        await this.productsMenuItem.click();
        await this.productSubBlock.isExisting();
    }

    async clickProductsSIPTrunkingSubMenuItem(){
        await this.productsSIPTrunkingSubMenuItem.click();
        await expect(browser).toHaveUrlContaining('/products/sip-trunks'); 
    }

    async clickProductsVoiceAPISubMenuItem(){
        await this.productsVoiceAPISubMenuItem.click();
        await expect(browser).toHaveUrlContaining('/products/voice-api'); 
    }

    // Have href Products

    // SMS API
    async haveUrlProductsSmsApiSubMenuItem(){
        //console.log('Hello ' + await this.productsSmsApiSubMenuItem.$$('/parent::a'));
        await expect(this.productsSmsApiSubMenuItem.$$('/parent::a')).toHaveAttributeContaining('href', '/products/sms-api') 
    }

    // Global Numbers
    async haveUrlProductsGlobalNumbersSubMenuItem(){
        await expect(this.productsGlobalNumbersSubMenuItem).toHaveAttribute('href', '/products/phone-numbers') 
    }
    

    // SIP Trunking
    async haveUrlProductsSIPTrunkingSubMenuItem(){
        await expect(this.productsSIPTrunkingSubMenuItem).toHaveAttribute('href', '/products/sip-trunks') 
    }    

    // IoT SIM Card
    async haveUrlProductsIoTSIMCardSubMenuItem(){
        await expect(this.productsIoTSIMCardSubMenuItem).toHaveAttribute('href', '/products/iot-sim-card') 
    }   

    // Voice API
    async haveUrlProductsVoiceAPISubMenuItem(){
        await expect(this.productsVoiceAPISubMenuItem).toHaveAttribute('href', '/products/voice-api') 
    }       
        
    // Storage
    async haveUrlProductsStorageSubMenuItem(){
        await expect(this.productsStorageSubMenuItem).toHaveAttribute('href', '/products/cloud-storage') 
    }
   
    // Microsoft Teams
    async haveUrlProductsMicrosoftTeamsSubMenuItem(){
        await expect(this.productsMicrosoftTeamsSubMenuItem).toHaveAttribute('href', '/products/enterprise-integrations-ms-teams') 
    }   

    // Zoom Phone
    async haveUrlProductsZoomPhoneSubMenuItem(){
        await expect(this.productsZoomPhoneSubMenuItem).toHaveAttribute('href', '/products/enterprise-integrations-zoom-phone') 
    } 
    
    // Global Edge Router
    async haveUrlProductsGlobalEdgeRouterSubMenuItem(){
        await expect(this.productsGlobalEdgeRouterSubMenuItem).toHaveAttribute('href', '/products/global-edge-router') 
    } 

    // See all products
    async haveUrlProductsSeeAllProductsSubMenuItem(){
        await expect(this.productsSeeAllProductsSubMenuItem).toHaveAttribute('href', '/products') 
    } 

    // Solutions
    async clickSolutionsMenuItem(){
        await this.solutionsMenuItem.click();
        await expect(browser).toHaveUrlContaining('/solutions');
    }

    // Have href Solutions
    async haveUrlSolutionsMenuItem(){
        await expect(this.solutionsMenuItem).toHaveAttribute('href', '/solutions') 
    }

    // Pricing
     async clickPricingLinkMenuItem(){
        await this.pricingLinkMenuItem.click();
        await this.pricingSubBlock.isExisting();
    }

    async clickPricingSIPTrunkingSubMenuItem(){
        await this.pricingSIPTrunkingSubMenuItem.click();
        await expect(browser).toHaveUrlContaining('/pricing/elastic-sip'); 
    } 

    // Have href Pricing
    // Messaging API
    async haveUrlPricingMessagingAPISubMenuItem(){
        await expect(this.pricingMessagingAPISubMenuItem).toHaveAttribute('href', '/pricing/messaging') 
    }

    // Global Numbers
    async haveUrlPricingGlobalNumbersSubMenuItem(){
        await expect(this.pricingGlobalNumbersSubMenuItem).toHaveAttribute('href', '/pricing/numbers') 
    }
     
    // SIP Trunking
    async haveUrlPricingSIPTrunkingSubMenuItem(){
        await expect(this.pricingSIPTrunkingSubMenuItem).toHaveAttribute('href', '/pricing/elastic-sip') 
    }
      
    // IoT SIM Card
    async haveUrlPricingIoTSIMCardSubMenuItem(){
        await expect(this.pricingIoTSIMCardSubMenuItem).toHaveAttribute('href', '/pricing/iot-data-plans') 
    }

    // Voice API
    async haveUrlPricingVoiceAPISubMenuItem(){
        await expect(this.pricingVoiceAPISubMenuItem).toHaveAttribute('href', '/pricing/call-control') 
    }
    
    // Storage
    async haveUrlPricingStorageSubMenuItem(){
        await expect(this.pricingStorageSubMenuItem).toHaveAttribute('href', '/pricing/storage') 
    }
    

    // See all pricing
    async haveUrlPricingSeeAllPricingSubMenuItem(){
        await expect(this.pricingSeeAllPricingSubMenuItem).toHaveAttribute('href', '/pricing') 
    }

    // Why Telnyx
    async clickPartnersWhyTelnyxSubMenuItem(){
        await this.partnersWhyTelnyxSubMenuItem.click();
        await expect(browser).toHaveUrlContaining('/partnerships'); 
    }

    async clickPartnersLinkMenuItem(){
        await this.whyTelnyxMenuItem.click();
        await this.partnersSubBLock.isExisting();
    }
    
    // Have href Why Telnyx
    // Overview
    async haveUrlWhyTelnyxOverviewSubMenuItem(){
        await expect(this.whyTelnyxOverviewSubMenuItem).toHaveAttribute('href', '/why-telnyx') 
    }

    // Network
    async haveUrlWhyTelnyxNetworkSubMenuItem(){
        await expect(this.whyTelnyxNetworkSubMenuItem).toHaveAttribute('href', '/our-network') 
    }
   
    // Mission Control
    async haveUrlWhyTelnyxMissionControlSubMenuItem(){
        await expect(this.whyTelnyxMissionControlSubMenuItem).toHaveAttribute('href', '/mission-control') 
    }
   
    // Partners
    async haveUrlWhyTelnyxPartnersSubMenuItem(){
        await expect(this.whyTelnyxPartnersSubMenuItem).toHaveAttribute('href', '/partnerships') 
    }   
        
    // Integrations
    async haveUrlWhyTelnyxIntegrationsSubMenuItem(){
        await expect(this.whyTelnyxIntegrationsSubMenuItem).toHaveAttribute('href', 'https://marketplace.telnyx.com') 
    }
  
    // Global coverage
    async haveUrlWhyTelnyxGlobalCoverageSubMenuItem(){
        await expect(this.whyTelnyxGlobalCoverageSubMenuItem).toHaveAttribute('href', '/global-coverage') 
    }    
   

    // Have href Resources
    // Customer Stories
    async haveUrlResourcesCustomerStoriesSubMenuItem(){
        await expect(this.resourcesCustomerStoriesSubMenuItem).toHaveAttribute('href', '/customer-stories') 
    }   

    // Blog
    async haveUrlResourcesBlogSubMenuItem(){
        await expect(this.resourcesBlogSubMenuItem).toHaveAttribute('href', '/resources') 
    }    

    // Support Center
    async haveUrlResourcesSupportCenterSubMenuItem(){
        await expect(this.resourcesSupportCenterSubMenuItem).toHaveAttribute('href', 'https://support.telnyx.com/en/') 
    }
   
    // Have href Developers 
    // Dev Docs
    async haveUrlDevelopersDevDocsSubMenuItem(){
        await expect(this.developersDevDocsSubMenuItem).toHaveAttribute('href', 'https://developers.telnyx.com/?_gl=1*166xlav*_ga*MTgyMDI4MzY4LjE2NzUwNjc5MTU.*_ga_ZPM4K1DLND*MTY4Nzk3OTk5MC4yMDguMS4xNjg3OTgwMzEzLjU4LjAuMA..') 
    }
   
    // Dev Community
    async haveUrlDevelopersDevCommunitySubMenuItem(){
        await expect(this.developersDevCommunitySubMenuItem).toHaveAttribute('href', 'https://community.telnyx.com') 
    }
   
}

export default new HeaderPage();
