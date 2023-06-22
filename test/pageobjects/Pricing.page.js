import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PricingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get messagingAPILink() {
        return $('//div[@id="communications"]//a//span[contains(text(), "Messaging API")]/parent::div/parent::div/parent::a');
    } 

    get  sipTrunkingLink(){
        return $('//div[@id="communications"]//a//span[contains(text(), "SIP Trunking")]/parent::div/parent::div/parent::a');
    }

    get  voiceAPILink(){
        return $('//div[@id="communications"]//a//span[contains(text(), "Voice API")]/parent::div/parent::div/parent::a');
    }

    get  globalNumbersLink(){
        return $('//div[@id="communications"]//a//span[contains(text(), "Global Numbers")]/parent::div/parent::div/parent::a');
    }

    get  videoAPILink(){
        return $('//div[@id="communications"]//a//span[contains(text(), "Video API")]/parent::div/parent::div/parent::a');
    }

    get  numberLookupAPILink(){
        return $('//div[@id="communications"]//a//span[contains(text(), "Number Lookup API")]/parent::div/parent::div/parent::a');
    }

    get  verifyAPILink(){
        return $('//div[@id="communications"]//a//span[contains(text(), "Verify API")]/parent::div/parent::div/parent::a');
    }

    get  faxAPILink(){
        return $('//div[@id="communications"]//a//span[contains(text(), "Fax API")]/parent::div/parent::div/parent::a');
    }

    get  ioTSIMCardLink(){
        return $('//div[@id="wireless"]//a//span[contains(text(), "IoT SIM Card")]/parent::div/parent::div/parent::a');
    }

    get  programmableNetworkingLink(){
        return $('//div[@id="networking"]//a//span[contains(text(), "Programmable Networking")]/parent::div/parent::div/parent::a');
    }

    get  globalEdgeRouterLink(){
        return $('//div[@id="networking"]//a//span[contains(text(), "Global Edge Router")]/parent::div/parent::div/parent::a');
    }

    get  storageLink(){
        return $('//div[@id="storage"]//a//span[contains(text(), "Storage")]/parent::div/parent::div/parent::a');
    }
  

    async haveUrlMessagingAPI(){
        await expect(this.messagingAPILink).toHaveAttrContaining('href', '/pricing/messaging');        
    }  

    async haveUrlSipTrunking(){
        await expect(this.sipTrunkingLink).toHaveAttrContaining('href', '/pricing/elastic-sip');        
    } 

    async haveUrlVoiceAPI(){
        await expect(this.voiceAPILink).toHaveAttrContaining('href', '/pricing/call-control');        
    } 

    async haveUrlGlobalNumbers(){
        await expect(this.globalNumbersLink).toHaveAttrContaining('href', '/pricing/numbers');        
    } 

    async haveUrlVideoAPI(){
        await expect(this.videoAPILink).toHaveAttrContaining('href', '/pricing/video-api');        
    } 

    async haveUrlNumberLookupAPI(){
        await expect(this.numberLookupAPILink).toHaveAttrContaining('href', '/pricing/number-lookup');        
    } 

    async haveUrlVerifyAPI(){
        await expect(this.verifyAPILink).toHaveAttrContaining('href', '/pricing/verify-api');        
    }
    
    async haveUrlFaxAPI(){
        await expect(this.faxAPILink).toHaveAttrContaining('href', '/pricing/fax');        
    } 

    async haveUrlIoTSIMCard(){
        await expect(this.ioTSIMCardLink).toHaveAttrContaining('href', '/pricing/iot-data-plans');        
    } 
    
    async haveUrlProgrammableNetworking(){
        await expect(this.programmableNetworkingLink).toHaveAttrContaining('href', '/pricing/networking');        
    } 

    async haveUrlGlobalEdgeRouter(){
        await expect(this.globalEdgeRouterLink).toHaveAttrContaining('href', '/pricing/global-edge-router');        
    } 

    async haveUrlStorage(){
        await expect(this.storageLink).toHaveAttrContaining('href', '/pricing/storage');        
    } 

    /*open () {
        return super.open('');
    }*/
}

export default new PricingPage();