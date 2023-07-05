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
        await RelatedResourcesPage.haveTextLinkFirstBlock();
        await RelatedResourcesPage.haveAttrButtonFirstBlock();
        await RelatedResourcesPage.haveAttrMailToLinkFirstBlock();
        await RelatedResourcesPage.haveAttrTelLinkFirstBlock(); 

        await RelatedResourcesPage.haveTitleSecondBlock();       
        await RelatedResourcesPage.haveTextLinkSecondBlock();
        await RelatedResourcesPage.haveAttrButtonSecondBlock();
        await RelatedResourcesPage.haveAttrMissionControlPortalLinkSecondBlock();
        await RelatedResourcesPage.haveAttrSupportCenterLinkSecondBlock(); 

        await RelatedResourcesPage.haveTitleThirdBlock();        
        await RelatedResourcesPage.haveTextLinkThirdBlock();
        await RelatedResourcesPage.haveAttrButtonThirdBlock();
        await RelatedResourcesPage.haveAttrReportAbuseLinkThirdBlock();              
       
    })
})