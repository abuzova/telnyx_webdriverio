import Page from './Page.js';
//const jsonFileFirst = require('../help/firstFooterMenuItems.json');
//const jsonFileSecond = require('../help/secondFooterMenuItems.json');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FooterPage extends Page {
    /**
     * define selectors using getter methods
     */
    /*constructor(iMax, jMax){
        this.i = 1;
        this.j = 1;
        this.iMax = iMax;
        this.jMax = jMax; 
        super();   
    }*/

    get firstFooterMenuItem() {
        //return $('footer div:nth-child(1) div:nth-child(2) ul li:nth-child(1) a');
        //return $('footer div:nth-child(1) div:nth-child(2) ul');

        const text = $$(function() { // Arrow function is not allowed here.
            // this is Window https://developer.mozilla.org/en-US/docs/Web/API/Window
            // TypeScript users may do something like this
            // return (this as Window).document.querySelectorAll('#menu')
            return this.document.querySelectorAll('footer div:nth-child(1) div:nth-child(2) ul'); // Element[]
        })[0]       
    }

    /*get secondFooterMenuItem() {
        return $('footer div:nth-child(1) div:nth-child(3) ul ');
    }*/

    /*get btnSubmit () {
        return $('button[type="submit"]');
    }*/

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    /*async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }*/

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }

    /*async haveAttrHrefFirstFooterMenu(i){        
        await expect(this.firstFooterMenuItem().$('li:nth-child('+ i +') a')).toHaveAttribute('href', jsonFile.firstFooterMenuItem[this.i]);
    }*/

    /*async haveAttrHrefSecondFooterMenu(j){        
        await expect(this.secondFooterMenuItem().$('li:nth-child('+ j +') a')).toHaveAttribute('href', jsonFile.secondFooterMenuItem[this.j]);
    }*/


}

export default new FooterPage();