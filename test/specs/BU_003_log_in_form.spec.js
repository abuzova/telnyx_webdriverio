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
})