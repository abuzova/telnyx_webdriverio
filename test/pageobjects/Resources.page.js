import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResoucesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get filterButton(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]');
    } 
    // aria-expanded="false"
   
    get chosedFilterLink() {
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]//a');
    } 

    get smsApiFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "SMS API")]');
    }

    get verifyAPIFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "Verify API")]');
    } 

    get sIPTrunkingFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "SIP Trunking")]');
    } 

    get storageFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "Storage")]');
    } 

    get faxFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "Fax")]');
    } 

    get iotSimCardFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "IoT SIM Card")]');
    } 

    get productUpdatesFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "Product updates")]');
    } 

    get guidesAndTutorialsFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "Guides and tutorials")]');
    } 

    get newsAndEventsFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "News and events")]');
    } 

    get expertInsightsFilter(){
        return $('//h2/span[contains(text(), "Browse our latest articles and updates")]/parent::h2/parent::div/following-sibling::div//button[@type="button"]/following-sibling::div//a//span[contains(text(), "Expert insights")]');
    }   

    async clickFilter(){
        await this.filterButton.click(); 
    }

    async clickSmsApiFilter(){
        await this.smsApiFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/topic/messaging');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/topic/messaging');      
    }
    
    async clickVerifyAPIFilter(){
        await this.verifyAPIFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/topic/verify-api');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/topic/verify-api');
    }

    async clickSIPTrunkingFilter(){
        await this.sIPTrunkingFilter.click();
        await expect(browser).toHaveUrlContaining('/topic/sip-trunking');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/topic/sip-trunking');
    }

    async clickStorageFilter(){
        await this.storageFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/topic/storage');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/topic/storage');
    }

    async clickFaxFilter(){
        await this.faxFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/topic/fax');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/topic/fax');
    }

    async clickIotSimCardFilter(){
        await this.iotSimCardFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/topic/wireless');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/topic/wireless');
    }

    async clickProductUpdatesFilter(){
        await this.productUpdatesFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/category/new-products-&-features');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/category/new-products-&-features');
    }

    async clickGuidesAndTutorialsFilter(){
        await this.guidesAndTutorialsFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/category/guides-&-tutorials');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/category/guides-&-tutorials');
    }

    async clickNewsAndEventsFilter(){
        await this.newsAndEventsFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/category/news-&-events');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/category/news-&-events');
    }

    async clickExpertInsightsFilter(){
        await this.expertInsightsFilter.click();
        await expect(browser).toHaveUrlContaining('/resources/category/insights-&-resources');
        await expect(this.chosedFilterLink).toHaveAttrContaining('href', '/resources/category/insights-&-resources');
    }   
}

export default new ResoucesPage();