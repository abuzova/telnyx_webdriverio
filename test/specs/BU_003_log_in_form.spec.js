import LoginPage from '../pageobjects/Login.page.js'
import HeaderPage from '../pageobjects/Header.page.js'
import Constants from '../helper/constants.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await LoginPage.open();
        await LoginPage.clickCloseButton();
    });

    it.only('Should login with valid credentials', async () => {      
        await HeaderPage.clickLogIn();          
        await LoginPage.setBusinessEmail(Constants.EMAIL);
        await LoginPage.setPassword(Constants.PASSWORD);
        await LoginPage.checkRememberMe();
        //await LoginPage.clickLogIn();      
    })

    /*it('should switch to another window', async () => {
        // open url
        await browser.url('https://google.com')
    
        // create new window
        await browser.newWindow('https://webdriver.io')
    
        // switch back via url match
        await browser.switchWindow('google.com')
    
        // switch back via title match
       // await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
    });*/
})