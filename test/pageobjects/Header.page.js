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

    async clickLogIn(){
        await this.logInLink.click();
        await browser.switchWindow('Telnyx Customer Portal'); 
        await expect(browser).toHaveUrlContaining('sign-in');  
    } 
    
    async clickSignUpLink(){
        await this.signUpLink.click(); 
        await expect(browser).toHaveUrlContaining('sign-up');  
    }

    async clickContactUsLink(){
        await this.contactUsLink.click();
        await expect(browser).toHaveUrlContaining('contact-us');  
    }

    /*open () {
        return super.open('');
    }*/
}

export default new HeaderPage();