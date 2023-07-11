import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */

    // Communications

    get communicationsBlock(){
        return $('//h2[contains(text(), "Communications")]/ancestor::section');
    }

    // Communications -> MESSAGING 

    get SMS_APILink(){
        //return $('//strong[contains(text(), "Messaging")]').nextElement().$('div>a>span:nth-child(1)');
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(1)');
    } 

    get MMS_APILink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(2)');
    } 

    get shortCodeLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(3)');
    }

    get DLCLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(4)');
    } 
    get alphanumericSenderIDPLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(5)');
    } 

    // Communications -> IDENTITY 
    get numberLookupAPILink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div>a:nth-child(1)');
    }

    get verifyAPILink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div>a:nth-child(2)');
    } 

    // Communications -> FAX

    get faxAPILink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(5)>div>a:nth-child(1)');
    } 
    // Communications -> NUMBERS
    
    get globalNumbersLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>a:nth-child(1)');
    } 

    get tollFreeNumbersLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>a:nth-child(2)');
    } 

    // Communications -> VOICE
  
    get SIPTrunkingLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(4)>div>a:nth-child(1)');
    } 

     get voiceAPILink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(4)>div>a:nth-child(2)');
     } 

    // Communications -> ENTERPRISE INTEGRATIONS
     
    get microsoftTeamsLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(6)>div>a:nth-child(1)');
    }

    get zoomPhoneLink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(6)>div>a:nth-child(2)');
    } 

    // Wireless
    get IoTSIMCardLink(){
        return $('section>div>div>div>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(1)');
    } 

    // Networking 

    get programmableNetworkingLink(){
        return $('section>div>div>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(1)');
    } 

    get cloudVPNLink(){
        return $('section>div>div>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(2)');
    } 

    get globalEdgeRouterLink(){
        return $('section>div>div>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(3)');
    } 

    // Storage

    get storageLink(){
        return $('section>div>div>div>div:nth-child(4)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(1)');
    } 

    
 
    // Communications -> MESSAGING 
    async haveSMS_APILink(){
        await expect(this.SMS_APILink).toHaveAttribute('href', '/products/sms-api')
    } 
    
    async haveMMS_APILink(){
        await expect(this.MMS_APILink).toHaveAttribute('href', '/products/mms-api')
    } 
   
    async haveShortCodeLink(){
        await expect(this.shortCodeLink).toHaveAttribute('href', '/products/sms-short-code')
    }

    async haveDLCLink(){
        await expect(this.DLCLink).toHaveAttribute('href', '/products/10dlc-registration')
    } 
       
    async haveAlphanumericSenderIDPLink(){
        await expect(this.alphanumericSenderIDPLink).toHaveAttribute('href', '/products/alphanumeric-sender-id')
    } 

    // Communications -> IDENTITY 
    async haveNumberLookupAPILink(){
        await expect(this.numberLookupAPILink).toHaveAttribute('href', '/products/number-lookup')
    }     

    async haveVerifyAPILink(){
        await expect(this.verifyAPILink).toHaveAttribute('href', '/products/verify-api')
    } 
    

    // Communications -> FAX
    async haveFaxAPILink(){
        await expect(this.faxAPILink).toHaveAttribute('href', '/products/fax-api')
    } 
    
    // Communications -> NUMBERS
    async haveGlobalNumbersLink(){
        await expect(this.globalNumbersLink).toHaveAttribute('href', '/products/phone-numbers')
    }    

    async haveTollFreeNumbersLink(){
        await expect(this.tollFreeNumbersLink).toHaveAttribute('href', '/products/toll-free-numbers')
    }    

    // Communications -> VOICE
    async haveSIPTrunkingLink(){
        await expect(this.SIPTrunkingLink).toHaveAttribute('href', '/products/sip-trunks')
    }   

    async haveVoiceAPILink(){
        await expect(this.voiceAPILink).toHaveAttribute('href', '/products/voice-api')
    }     

    // Communications -> ENTERPRISE INTEGRATIONS
    async haveMicrosoftTeamsLink(){
        await expect(this.microsoftTeamsLink).toHaveAttribute('href', '/products/enterprise-integrations-ms-teams')
    } 
   
    async haveZoomPhoneLink(){
        await expect(this.zoomPhoneLink).toHaveAttribute('href', '/products/enterprise-integrations-zoom-phone')
    }   

    // Wireless

    async haveIoTSIMCardLink(){
        await expect(this.IoTSIMCardLink).toHaveAttribute('href', '/products/iot-sim-card')
    } 

    // Networking 

    async haveProgrammableNetworkingLink(){
        await expect(this.programmableNetworkingLink).toHaveAttribute('href', '/products/programmable-networking')
    }   

    async haveCloudVPNLink(){
        await expect(this.cloudVPNLink).toHaveAttribute('href', '/products/cloud-vpn')
    } 
  

    async haveGlobalEdgeRouterLink(){
        await expect(this.globalEdgeRouterLink).toHaveAttribute('href', '/products/global-edge-router')
    } 

    // Storage
    async haveStorageLink(){
        await expect(this.storageLink).toHaveAttribute('href', '/products/storage')
    } 
}

export default new ProductsPage();
