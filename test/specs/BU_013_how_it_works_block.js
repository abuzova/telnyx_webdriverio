import MissionControlPage from '../pageobjects/MissionControl.page.js'
import HeaderPage from '../pageobjects/Header.page.js'

describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open();
        await HeaderPage.clickCloseButton();
    })

    it('Testing "HOW IT WORKS" block work', async () => {
        await HeaderPage.clickWhyTelnyxLinkMenuItem();
        await HeaderPage.clickMissionControlWhyTelnyxSubMenuItem();        
        
        await MissionControlPage.clickFirstButton();
        await MissionControlPage.clickSecondButton();
        await MissionControlPage.clickThirdButton();
        await MissionControlPage.clickFourthButton();    
    })
})