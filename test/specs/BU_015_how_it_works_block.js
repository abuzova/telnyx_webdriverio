import SolutionsPage from '../pageobjects/Solutions.page.js';
import HeaderPage from '../pageobjects/Header.page.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Testing the "FEATURES" block for correct data', async () => {
        await HeaderPage.clickSolutionsMenuItem();
        
        await SolutionsPage.clickGoNextPagination2();
        await SolutionsPage.clickGoNextPagination3();
        await SolutionsPage.clickAccountNotifications();

        await SolutionsPage.haveArticleNumber_1();
        await SolutionsPage.havearAticleTitle_1();
        await SolutionsPage.haveArticleDescription_1();

        await SolutionsPage.haveArticleNumber_2();
        await SolutionsPage.havearAticleTitle_2();
        await SolutionsPage.haveArticleDescription_2();

        await SolutionsPage.haveArticleNumber_3();
        await SolutionsPage.havearAticleTitle_3();
        await SolutionsPage.haveArticleDescription_3();

        await SolutionsPage.haveArticleNumber_4();
        await SolutionsPage.havearAticleTitle_4();
        await SolutionsPage.haveArticleDescription_4();   
    })
})