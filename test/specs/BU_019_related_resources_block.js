import HeaderPage from '../pageobjects/Header.page.js';
import RelatedResourcesPage from '../pageobjects/RelatedResources.page.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Checking "RELATED RESOURCES" block content', async () => {
        await HeaderPage.clickContactUsLink();

        await RelatedResourcesPage.haveTitleFirstBlock();
        //await RelatedResourcesPage.haveDescriptionFirstBlock();
        await RelatedResourcesPage.haveTextLinkFirstBlock();
        await RelatedResourcesPage.haveAttrLinkFirstBlock();
        await RelatedResourcesPage.haveAttrLink_1FirstBlock();
        await RelatedResourcesPage.haveAttrLink_2FirstBlock(); 


        await RelatedResourcesPage.haveTitleSecondBlock();
        //await RelatedResourcesPage.haveDescriptionSecondBlock();
        await RelatedResourcesPage.haveTextLinkSecondBlock();
        await RelatedResourcesPage.haveAttrLinkSecondBlock();
        //await RelatedResourcesPage.haveAttrLink_1SecondBlock();
        await RelatedResourcesPage.haveAttrLink_2SecondBlock();


        await RelatedResourcesPage.haveTitleThirdBlock();
        //await RelatedResourcesPage.haveDescriptionThirdBlock();
        await RelatedResourcesPage.haveTextLinkThirdBlock();
        await RelatedResourcesPage.haveAttrLinkThirdBlock();
        await RelatedResourcesPage.haveAttrLink_1ThirdBlock();      
       
    })
})