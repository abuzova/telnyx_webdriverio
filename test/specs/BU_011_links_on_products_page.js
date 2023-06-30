import ProductsPage from '../pageobjects/Products.page.js'
import HeaderPage from '../pageobjects/Header.page.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open();
        await HeaderPage.clickCloseButton();
    })

    it('Checking correct links work on the Products page', async () => {
        await HeaderPage.clickProductsLinkMenuItem();
        await HeaderPage.clickProductsSeeAllProductsSubMenuItem();
        await ProductsPage.communicationsBlock.scrollIntoView();

        await ProductsPage.haveSMS_APILink();
        await ProductsPage.haveMMS_APILink();
        await ProductsPage.haveShortCodeLink();
        await ProductsPage.haveDLCLink();
        await ProductsPage.haveAlphanumericSenderIDPLink();
        await ProductsPage.haveNumberLookupAPILink();
        await ProductsPage.haveVerifyAPILink();
        await ProductsPage.haveFaxAPILink();
        await ProductsPage.haveGlobalNumbersLink();
        await ProductsPage.haveTollFreeNumbersLink();
        await ProductsPage.haveSIPTrunkingLink();
        await ProductsPage.haveVoiceAPILink();
        await ProductsPage.haveMicrosoftTeamsLink();
        await ProductsPage.haveZoomPhoneLink();
        await ProductsPage.haveIoTSIMCardLink();
        await ProductsPage.haveProgrammableNetworkingLink();
        await ProductsPage.haveCloudVPNLink();
        await ProductsPage.haveGlobalEdgeRouterLink();
        await ProductsPage.haveStorageLink();
    
    })
})


