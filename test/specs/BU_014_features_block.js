import VoiceApiProductsPage from '../pageobjects/VoiceApiProducts.page.js';
import HeaderPage from '../pageobjects/Header.page.js';
// import Constants from '';
// import formdata from '../resources/articleData.json' assert { type : "json" }


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Testing the "FEATURES" block for correct data', async () => {
        await HeaderPage.clickProductsLinkMenuItem();
        await HeaderPage.clickProductsVoiceAPISubMenuItem(); 

        await VoiceApiProductsPage.haveTitleMainArticle();
        await VoiceApiProductsPage.haveDescriptionMainArticleInLink();
        await VoiceApiProductsPage.haveTitleArticle1();
        await VoiceApiProductsPage.haveDescriptionArticle1();
        await VoiceApiProductsPage.haveTitleArticle2();
        await VoiceApiProductsPage.haveDescriptionArticle2();
        await VoiceApiProductsPage.haveTitleArticle3();
        await VoiceApiProductsPage.haveDescriptionArticle3();
        await VoiceApiProductsPage.haveTitleArticle4();
        await VoiceApiProductsPage.haveDescriptionArticle4();
        await VoiceApiProductsPage.haveTitleArticle5();
        await VoiceApiProductsPage.haveDescriptionArticle5();
        await VoiceApiProductsPage.haveTitleArticle6();
        await VoiceApiProductsPage.haveDescriptionArticle6();        
    })
})