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
        return $('//header/div/div/div/nav//button/div/span/span[text()="Products"]');
    }

    get productSubBlock(){
        return $('header div>nav div:nth-child(2) div[data-radix-popper-content-wrapper]');
    }

    //SMS API
    get productsSmsApiSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[contains(text(), "SMS API")]');
    }

    //Global Numbers
    get productsGlobalNumbersSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Global Numbers"]');
    }

    // SIP Trunking
    get productsSIPTrunkingSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="SIP Trunking"]');
    }

    // IoT SIM Card
    get productsIoTSIMCardSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="IoT SIM Card"]');
    }

    // Voice API
    get productsVoiceAPISubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Voice API"]');
    }        
        
    // Storage
    get productsStorageSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Storage"]');
    }

    // Microsoft Teams
    get productsMicrosoftTeamsSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Microsoft Teams"]');
    }

    // Zoom Phone
    get productsZoomPhoneSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Zoom Phone"]');
    }

    // Global Edge Router
    get productsGlobalEdgeRouterSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Global Edge Router"]');
    } 

    // See all products
    get productsSeeAllProductsSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="See all products"]');
    }

    // Pricing block
    // Pricing
    get pricingMenuItem(){
        return $('//header/div/div/div/nav//button/div/span/span[text()="Pricing"]');
    }

    get pricingSubBlock(){
        return $('header div>nav div:nth-child(7) div[data-radix-popper-content-wrapper]');
    } 

    // Messaging API
    get pricingMessagingAPISubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Messaging API"]');
    } 

    // Global Numbers
    get pricingGlobalNumbersSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Global Numbers"]');
    } 

    // SIP Trunking
    get pricingSIPTrunkingSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="SIP Trunking"]');
    }
    
    // IoT SIM Card
    get pricingIoTSIMCardSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="IoT SIM Card"]');
    } 

    // Voice API
    get pricingVoiceAPISubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Voice API"]');
    } 

    // Storage
    get pricingStorageSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Storage"]');
    } 

    // See all pricing
    get pricingSeeAllPricingSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="See all pricing"]');
    } 

    // Solutions

    get solutionsMenuItem(){
        return $('//nav/a/span/span[contains(text(), "Solutions")]');
    }
    

    // Why Telnyx block
    // Why Telnyx
    get whyTelnyxMenuItem(){
        return $('//header/div/div/div/nav//button/div/span/span[text()="Why Telnyx"]');
    }
    
    get whyTelnyxSubBLock(){
        return $('header div>nav div:nth-child(11) div[data-radix-popper-content-wrapper]');
    }

    // Overview
    get whyTelnyxOverviewSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Overview"]');
    }

    // Network
    get whyTelnyxNetworkSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Network"]');
    }
    // Mission Control
    get whyTelnyxMissionControlSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Mission Control"]');
    }

    // Partners
    get whyTelnyxPartnersSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Partners"]');
    }
        
    // Integrations
    get whyTelnyxIntegrationsSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Integrations"]');
    }

    // Global coverage
    get whyTelnyxGlobalCoverageSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Global coverage"]');
    }   
   
    //  Resources block
    // Resources
    get resourcesMenuItem(){
        return $('//header/div/div/div/nav//button/div/span/span[text()="Resources"]');
    }
    
    get resourcesSubBlock(){
        return $('header div>nav div:nth-child(14) div[data-radix-popper-content-wrapper]');
    }

    // Customer Stories
    get resourcesCustomerStoriesSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Customer Stories"]');
    } 

    // Blog
    get resourcesBlogSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span/span[text()="Blog"]');
    } 

    // Support Center
    get resourcesSupportCenterSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Support Center"]');
    } 
     
    // Developers block
    // Developers
    get developersMenuItem(){
        return $('//header/div/div/div/nav//button/div/span/span[text()="Developers"]');
    } 

    get developersSubBlock(){
        return $('header div>nav div:nth-child(17) div[data-radix-popper-content-wrapper]');
    }

    // Dev Docs
    get developersDevDocsSubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Dev Docs"]');
    } 

    // Dev Community
    get developersDevCommunitySubMenuItem(){
        return $('//header/div/div/div/nav//a/span/span[text()="Dev Community"]');
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
        await expect(this.productsSmsApiSubMenuItem.parentElement().parentElement()).toHaveAttributeContaining('href', '/products/sms-api'); 
    }

    // Global Numbers
    async haveUrlProductsGlobalNumbersSubMenuItem(){
        await expect(this.productsGlobalNumbersSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/phone-numbers') 
    }
    

    // SIP Trunking
    async haveUrlProductsSIPTrunkingSubMenuItem(){
        await expect(this.productsSIPTrunkingSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/sip-trunks') 
    }    

    // IoT SIM Card
    async haveUrlProductsIoTSIMCardSubMenuItem(){
        await expect(this.productsIoTSIMCardSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/iot-sim-card') 
    }   

    // Voice API
    async haveUrlProductsVoiceAPISubMenuItem(){
        await expect(this.productsVoiceAPISubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/voice-api') 
    }       
        
    // Storage
    async haveUrlProductsStorageSubMenuItem(){
        await expect(this.productsStorageSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/cloud-storage') 
    }
   
    // Microsoft Teams
    async haveUrlProductsMicrosoftTeamsSubMenuItem(){
        await expect(this.productsMicrosoftTeamsSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/enterprise-integrations-ms-teams') 
    }   

    // Zoom Phone
    async haveUrlProductsZoomPhoneSubMenuItem(){
        await expect(this.productsZoomPhoneSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/enterprise-integrations-zoom-phone') 
    } 
    
    // Global Edge Router
    async haveUrlProductsGlobalEdgeRouterSubMenuItem(){
        await expect(this.productsGlobalEdgeRouterSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products/global-edge-router') 
    } 

    // See all products
    async haveUrlProductsSeeAllProductsSubMenuItem(){
        await expect(this.productsSeeAllProductsSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/products') 
    } 

    // Solutions
    async clickSolutionsMenuItem(){
        await this.solutionsMenuItem.click();
        await expect(browser).toHaveUrlContaining('/solutions');
    }

    // Have href Solutions
    async haveUrlSolutionsMenuItem(){
        await expect(this.solutionsMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/solutions') 
    }

    // Pricing
    async clickPricingLinkMenuItem(){
        await this.pricingMenuItem.click();
        await this.pricingSubBlock.isExisting();
    }

    async clickPricingSIPTrunkingSubMenuItem(){
        await this.pricingSIPTrunkingSubMenuItem.click();
        await expect(browser).toHaveUrlContaining('/pricing/elastic-sip'); 
    } 

    // Have href Pricing
    // Messaging API
    async haveUrlPricingMessagingAPISubMenuItem(){
        await expect(this.pricingMessagingAPISubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/pricing/messaging') 
    }

    // Global Numbers
    async haveUrlPricingGlobalNumbersSubMenuItem(){
        await expect(this.pricingGlobalNumbersSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/pricing/numbers') 
    }
     
    // SIP Trunking
    async haveUrlPricingSIPTrunkingSubMenuItem(){
        await expect(this.pricingSIPTrunkingSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/pricing/elastic-sip') 
    }
      
    // IoT SIM Card
    async haveUrlPricingIoTSIMCardSubMenuItem(){
        await expect(this.pricingIoTSIMCardSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/pricing/iot-data-plans') 
    }

    // Voice API
    async haveUrlPricingVoiceAPISubMenuItem(){
        await expect(this.pricingVoiceAPISubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/pricing/call-control') 
    }
    
    // Storage
    async haveUrlPricingStorageSubMenuItem(){
        await expect(this.pricingStorageSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/pricing/storage') 
    }
    

    // See all pricing
    async haveUrlPricingSeeAllPricingSubMenuItem(){
        await expect(this.pricingSeeAllPricingSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/pricing') 
    }

    // Why Telnyx
    async clickPartnersWhyTelnyxSubMenuItem(){
        await this.partnersWhyTelnyxSubMenuItem.click();
        await expect(browser).toHaveUrlContaining('/partnerships'); 
    }

    async clickWhyTelnyxLinkMenuItem(){
        await this.whyTelnyxMenuItem.click();
        await this.whyTelnyxSubBLock.isExisting();
    }
    
    // Have href Why Telnyx
    // Overview
    async haveUrlWhyTelnyxOverviewSubMenuItem(){
        await expect(this.whyTelnyxOverviewSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/why-telnyx') 
    }

    // Network
    async haveUrlWhyTelnyxNetworkSubMenuItem(){
        await expect(this.whyTelnyxNetworkSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/our-network') 
    }
   
    // Mission Control
    async haveUrlWhyTelnyxMissionControlSubMenuItem(){
        await expect(this.whyTelnyxMissionControlSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/mission-control') 
    }
   
    // Partners
    async haveUrlWhyTelnyxPartnersSubMenuItem(){
        await expect(this.whyTelnyxPartnersSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/partnerships') 
    }   
        
    // Integrations
    async haveUrlWhyTelnyxIntegrationsSubMenuItem(){
        await expect(this.whyTelnyxIntegrationsSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', 'https://marketplace.telnyx.com') 
    }
  
    // Global coverage
    async haveUrlWhyTelnyxGlobalCoverageSubMenuItem(){
        await expect(this.whyTelnyxGlobalCoverageSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/global-coverage') 
    } 


    // Resources     
    async clickResourcesMenuItem(){
        await this.resourcesMenuItem.click();
        await this.resourcesSubBlock.isExisting();
    }   

    // Have href Resources  

    // Customer Stories
    async haveUrlResourcesCustomerStoriesSubMenuItem(){
        await expect(this.resourcesCustomerStoriesSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/customer-stories');
    }   

    // Blog
    async haveUrlResourcesBlogSubMenuItem(){
        await expect(this.resourcesBlogSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', '/resources'); 
    }    

    // Support Center
    async haveUrlResourcesSupportCenterSubMenuItem(){
        await expect(this.resourcesSupportCenterSubMenuItem.parentElement().parentElement()).toHaveAttribute('href', 'https://support.telnyx.com/en/'); 
    }

    // Dev Docs
    async clickDevDocsMenuItem(){
        await this.developersMenuItem.click();
        await this.developersSubBlock.isExisting();      
    } 
   
    // Have href Developers 
    // Dev Docs
    async haveUrlDevelopersDevDocsSubMenuItem(){
        await expect(this.developersDevDocsSubMenuItem.parentElement().parentElement()).toHaveHref('https://developers.telnyx.com');
    }
   
    // Dev Community
    async haveUrlDevelopersDevCommunitySubMenuItem(){
        await expect(this.developersDevCommunitySubMenuItem.parentElement().parentElement()).toHaveAttribute('href', 'https://community.telnyx.com'); 
    }
   
}

export default new HeaderPage();
