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

export default new HeaderPage();