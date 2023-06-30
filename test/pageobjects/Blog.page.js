import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BlogPage extends Page {
    /**
     * define selectors using getter methods
     */
    get goNextPageArrow() {
        return $('//nav//a/span[contains(text(), "Go to next page")]/parent::a');
    }
    
    get sms_mms_DeliverabilityGuideArticle(){
        return $('//h3[contains(text(), "SMS/MMS Deliverability Guide 2023")]/following-sibling::div/a');
    }

    async clickGoNextPageArrow(){
        await this.goNextPageArrow.click();
        await expect(browser).toHaveUrlContaining('/resources/page');
    }

    async clickSmsMms_DeliverabilityGuideArticle(){
        await this.sms_mms_DeliverabilityGuideArticle.click();
        await expect(browser).toHaveUrlContaining('/resources/sms-mms-deliverability-guide-2023');
    }
}

export default new BlogPage();


