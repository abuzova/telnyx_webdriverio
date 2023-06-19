import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */

    // Communications -> MESSAGING 

    get SMS_APILink(){
        //return $('//strong[contains(text(), "Messaging")]').nextElement().$('div>a>span:nth-child(1)');
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(1)>span:nth-child(1)');
    } 

    get MMS_APILink(){
        return $('section>div>div>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div>a:nth-child(2)>span:nth-child(1)');
    } 

    get shortCodeLink(){
        return $('');
    }

    get DLCLink(){
        return $('');
    } 
    get alphanumericSenderIDPLink(){
        return $('');
    } 

    // Communications -> IDENTITY 
    get numberLookupAPILink(){
        return $('');
    }

    get verifyAPILink(){
        return $('');
    } 

    // Communications -> FAX

    get faxAPILink(){
        return $('');
    } 
    // Communications -> NUMBERS
    
    get globalNumbersLink(){
        return $('');
    } 

    get tollFreeNumbersLink(){
        return $('');
    } 

    // Communications -> VOICE
  
    get SIPTrunkingLink(){
        return $('');
    } 

     get voiceAPILink(){
        return $('');
     } 

    // Communications -> ENTERPRISE INTEGRATIONS
     
    get microsoftTeamsLink(){
        return $('');
    }

    get zoomPhoneLink(){
        return $('');
    } 

    // Wireless
    get IoTSIMCardLink(){
        return $('');
    } 

    // Networking 

    get programmableNetworkingLink(){
        return $('');
    } 

    get cloudVPNLink(){
        return $('');
    } 

    get globalEdgeRouterLink(){
        return $('');
    } 

    // Storage

    get storageLink(){
        return $('');
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

  
}

export default new ProductsPage();
