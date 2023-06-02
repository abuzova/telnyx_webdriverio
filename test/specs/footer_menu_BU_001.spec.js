import FooterPage from '../pageobjects/Footer.page.js'
//import SecurePage from '../pageobjects/secure.page.js'

describe('Checking correct the Footer menu work', () => {
    beforeEach(function () {
        console.log("Initialising...");
        FooterPage.open();
        FooterPage.closeButton.click();
    });
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
    it.only('Checking correct the Footer menu work', async () => {
        
        await browser.setTimeout({
            'pageLoad': 10000,
            'script': 60000
        });


        //console.log(await FooterPage.firstFooterMenuItem);
        //console.log(await text.$$('li')[2].$('a').getText());
        //console.log(await FooterPage.$$('li')[2].$('a').getText());
        console.log('This is a footer menu: ' + await FooterPage.firstFooterMenuItem);
        console.log('Hello Word!!!');       
        

        const text = await $$(function() { // Arrow function is not allowed here.
            // this is Window https://developer.mozilla.org/en-US/docs/Web/API/Window
            // TypeScript users may do something like this
            // return (this as Window).document.querySelectorAll('#menu')
            return document.querySelectorAll('footer div:nth-child(1) div:nth-child(2) ul'); // Element[]
        })[0] 

        console.log('This is a footer menu from main file : ' + text.$$('li')[1].$('a').getText());

         //let obj =  await FooterPage.firstFooterMenuItem;
        let arr = await Object.entries(text.$$('li')[1].$('a').getText()); 
        console.log('Footer arr ' + await arr[0]);

        await expect(text.$$('li')[0].$('a')).toHaveText('DATA AND PRIVACY');
        await expect(text.$$('li')[0].$('a')).toHaveAttribute('href', '/data-privacy')
        console.log('This is a li>a element: ' + await expect(text.$$('li')[0].$('a')));
        let arr1 = Object.entries(text.$$('li')[1].$('a').getText()); 
        console.log('Footer arr ' + arr1[1]);



        //let 
        //for(let i = 0; i < 10; i++){

        //}

        


        //await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!')
    })
})