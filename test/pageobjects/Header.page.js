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
<<<<<<< HEAD
    } 
    
    get signUpLink(){
        return $('header>div>div>div:nth-child(4)>a');
    }

    get contactUsLink(){
        return $('header>div>div>div>div>a:nth-child(1)');
    }

    // Main menu

    // Products
    get productsMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Products"]');
    }

    get productsSIPTrunkingSubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="SIP Trunking"]');
    }

    get productsVoiceAPISubMenuItem(){
        return $('//header/div/div/div/nav/div//a/span[text()="Voice API"]');
    }

    get productSubBlock(){
        return $('header div>nav div:nth-child(2) div[data-radix-popper-content-wrapper]');
    }

    // Pricing
    get pricingLinkMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Pricing"]');
    }

    get pricingSIPTrunkingSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="SIP Trunking"]');
    }

    get pricingSubBlock(){
        return $('header div>nav div:nth-child(7) div[data-radix-popper-content-wrapper]');
    }    

    // Solutions

    get solutionsMenuItem(){
        return $('//nav/a/span[contains(text(), "Solutions")]');
    }

    // Why Telnyx

    get whyTelnyxMenuItem(){
        return $('//header/div/div/div/nav//button/div/span[text()="Why Telnyx"]');
    }    

    get partnersWhyTelnyxSubMenuItem(){
        return $('//header/div/div/div/nav//a/span[text()="Partners"]');
    }

    get partnersSubBLock(){
        return $('header div>nav div:nth-child(11) div[data-radix-popper-content-wrapper]');
    }
=======
    }   
>>>>>>> log_in_form_BU_003

    async clickLogIn(){
        await this.logInLink.click();
        await browser.switchWindow('Telnyx Customer Portal'); 
        await expect(browser).toHaveUrlContaining('sign-in');  
<<<<<<< HEAD
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

    // Pricing
    async clickPricingLinkMenuItem(){
        await this.pricingLinkMenuItem.click();
        await this.pricingSubBlock.isExisting();
    }

    async clickPricingSIPTrunkingSubMenuItem(){
        await this.pricingSIPTrunkingSubMenuItem.click();
        await expect(browser).toHaveUrlContaining('/pricing/elastic-sip'); 
    }   

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

    // Solutions
    async clickSolutionsMenuItem(){
        await this.solutionsMenuItem.click();
        await expect(browser).toHaveUrlContaining('/solutions');
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

    /*open () {
        return super.open('');
    }*/
}

export default new HeaderPage();
=======
    }  
}

export default new HeaderPage();
>>>>>>> log_in_form_BU_003
