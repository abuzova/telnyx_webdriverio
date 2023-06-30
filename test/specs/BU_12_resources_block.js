import ProductsSIPTrunkingPage from '../pageobjects/ProductsSIPTrunking.page.js'
import HeaderPage from '../pageobjects/Header.page.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();
    })

    it('Testing "Resources" block work', async () => {
        await HeaderPage.clickProductsLinkMenuItem();
        await HeaderPage.clickProductsSIPTrunkingSubMenuItem();

        await ProductsSIPTrunkingPage.activecUR();
        await ProductsSIPTrunkingPage.activePython();
        await ProductsSIPTrunkingPage.activeRuby();
        await ProductsSIPTrunkingPage.activeNode();
        await ProductsSIPTrunkingPage.activePHP();
        await ProductsSIPTrunkingPage.activeNET();      
    })
})

