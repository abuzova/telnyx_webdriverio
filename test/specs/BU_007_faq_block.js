import FAQBlockPage from '../pageobjects/FAQBlock.page.js'
import HeaderPage from '../pageobjects/Header.page.js'
//import Constants from '../helper/constants.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();
    })

    it('Testing "Frequently Asked Questions" block work', async () => {
        await HeaderPage.clickProductsLinkMenuItem();
        await HeaderPage.clickProductsSIPTrunkingSubMenuItem();

        await FAQBlockPage.clickSecondButton();
        await FAQBlockPage.clickThirdButton();
        await FAQBlockPage.clickFourthButton();
        await FAQBlockPage.clickFifthButton();
        await FAQBlockPage.clickSixthButton();
        await FAQBlockPage.clickSeventhButton();
        await FAQBlockPage.clickFirstButton();
    })
})