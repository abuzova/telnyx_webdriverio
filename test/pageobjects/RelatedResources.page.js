import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RelatedResourcesPage extends Page {
    /**
     * define selectors using getter methods
     */

    // First block 

    get titleFirstBlock() {
        return $('ul li[title="Contact us related resources 1"] h3');
    }

    

    // Second block
    // Third block 

   


    // 
    
  
    get l() {
        return $('');
    } 

    get l() {
        return $('');
    } 

    get l() {
        return $('');
    } 


    get l() {
        return $('');
    } 

    get l() {
        return $('');
    } 

    get l() {
        return $('');
    } 

    get l() {
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

    async clickContactUsLink(){
        await this.contactUsLink.click();
        await expect(browser).toHaveUrlContaining('contact-us');  
    }

}

export default new RelatedResourcesPage();