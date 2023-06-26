import HeaderPage from '../pageobjects/Header.page.js';
import BlogPage from '../pageobjects/Blog.page.js';
import DeliverabilityGuidePage from '../pageobjects/DeliverabilityGuide.page.js';
import Constants from '../helper/constants.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Verify "2023 SMS Deliverability eBook" form with valid credentials', async () => {
        await HeaderPage.clickResourcesLinkMenuItem();
        await HeaderPage.clickBlogResourcesSubMenuItem();
        await BlogPage.clickGoNextPageArrow();
        await expect(browser).toHaveUrlContaining('https://telnyx.com/resources/page');
        await BlogPage.clickSmsMms_DeliverabilityGuideArticle();

        await DeliverabilityGuidePage.setFirstName(Constants.FIRST_NAME);
        await DeliverabilityGuidePage.setLastName(Constants.LAST_NAME);
        await DeliverabilityGuidePage.setCompanyName(Constants.COMPANY);
        await DeliverabilityGuidePage.setEmailAddress(Constants.EMAIL);
        await DeliverabilityGuidePage.clickSubscription();
        //await DeliverabilityGuidePage.clickSendContent();        
       
    })
})