import SolutionsPage from '../pageobjects/Solutions.page.js'
import HeaderPage from '../pageobjects/Header.page.js'


describe('My Login application', () => {
    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open();
        await HeaderPage.clickCloseButton();
    })

    it('Checking correct the Industries block work', async () => {       
        await HeaderPage.clickSolutionsMenuItem();
        await SolutionsPage.haveHealthcareLink();        
        await SolutionsPage.haveRetailEcommerceLink();
        await SolutionsPage.haveLogisticsTransportationLink();
        await SolutionsPage.haveTravelHospitalityLink();
        await SolutionsPage.haveFinancialServicesLink();
    })
})