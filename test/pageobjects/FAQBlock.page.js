

import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FAQBlockPage extends Page {
    /**
     * define selectors using getter methods
     */
    get questionBlock() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(1)'); // should be loop
    }

    /*get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }*/

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    /* async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    } */

    async 

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new FAQBlockPage();
