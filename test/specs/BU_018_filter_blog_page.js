import ResoucesPage from '../pageobjects/Resources.page.js';
import HeaderPage from '../pageobjects/Header.page.js';


describe('My Login application', () => {

    beforeEach( async () => {
        await browser.setWindowSize(1800, 1500);
        await HeaderPage.open('');
        await HeaderPage.clickCloseButton();       
    })

    it('Testing the filter of the Blog page', async () => {
        await HeaderPage.clickResourcesLinkMenuItem();
        await HeaderPage.clickBlogResourcesSubMenuItem();

        await ResoucesPage.filterButton.scrollIntoView({ block: 'center', inline: 'center' });
        await ResoucesPage.clickFilter();
        await ResoucesPage.clickSmsApiFilter(); 

        await ResoucesPage.filterButton.scrollIntoView({ block: 'center', inline: 'center' });
        await ResoucesPage.clickFilter();
        await ResoucesPage.clickVerifyAPIFilter();

        await ResoucesPage.filterButton.scrollIntoView({ block: 'center', inline: 'center' });
        await ResoucesPage.clickFilter();
        await ResoucesPage.clickSIPTrunkingFilter();

        await ResoucesPage.filterButton.scrollIntoView();
        await ResoucesPage.clickFilter();    
        await ResoucesPage.clickStorageFilter();

        await ResoucesPage.filterButton.scrollIntoView();
        await ResoucesPage.clickFilter();    
        await ResoucesPage.clickFaxFilter();

        await ResoucesPage.filterButton.scrollIntoView();
        await ResoucesPage.clickFilter();    
        await ResoucesPage.clickIotSimCardFilter();

        await ResoucesPage.filterButton.scrollIntoView();
        await ResoucesPage.clickFilter();    
        await ResoucesPage.clickProductUpdatesFilter();

        await ResoucesPage.filterButton.scrollIntoView();
        await ResoucesPage.clickFilter();   
        await ResoucesPage.clickGuidesAndTutorialsFilter();

        await ResoucesPage.filterButton.scrollIntoView();
        await ResoucesPage.clickFilter();    
        await ResoucesPage.clickNewsAndEventsFilter();

        await ResoucesPage.filterButton.scrollIntoView();
        await ResoucesPage.clickFilter();    
        await ResoucesPage.clickExpertInsightsFilter();       
 
    })
})