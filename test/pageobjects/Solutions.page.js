import Page from './Page.js';
import formdata from '../resources/how_it_works_solutions.json' assert { type : "json" }

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SolutionsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get goNextPagination() {
        return $('//nav[@aria-label="pagination"]/a/span[contains(text(),"Go to next page")]/parent::a');
    }
    
    get accountNotificationsLink(){
        return $('//ul/li//h3[contains(text(), "Account notifications")]/parent::div//a');
    } 
    
    get articleNumber_1() {
        return $('ol li:nth-child(1) strong');
    }

    get articleTitle_1(){
        return $('ol li:nth-child(1) h3');
    }

    get articleDescription_1(){
        return $('ol li:nth-child(1) p');
    }
   
    get articleNumber_2() {
        return $('ol li:nth-child(2) strong');
    }

    get articleTitle_2(){
        return $('ol li:nth-child(2) h3');
    }

    get articleDescription_2(){
        return $('ol li:nth-child(2) p');
    }

    get articleNumber_3() {
        return $('ol li:nth-child(3) strong');
    }

    get articleTitle_3(){
        return $('ol li:nth-child(3) h3');
    }

    get articleDescription_3(){
        return $('ol li:nth-child(3) p');
    }

    get articleNumber_4() {
        return $('ol li:nth-child(4) strong');
    }

    get articleTitle_4(){
        return $('ol li:nth-child(4) h3');
    }

    get articleDescription_4(){
        return $('ol li:nth-child(4) p');
    }


    async clickGoNextPagination2(){       
        await this.goNextPagination.click();
        await expect(browser).toHaveUrlContaining('/solutions/page/2#use-cases');
    }

    async clickGoNextPagination3(){
        await this.goNextPagination.click();
        await expect(browser).toHaveUrlContaining('/solutions/page/3#use-cases');
    }

    async clickAccountNotifications(){
        this.accountNotificationsLink.click();
        await expect(browser).toHaveUrlContaining('/use-cases/customer-notifications-system');

    }

    async haveArticleNumber_1(){        
        await expect(this.articleNumber_1).toHaveText(formdata.first_block.number);
    }

    async havearAticleTitle_1(){        
        await expect(this.articleTitle_1).toHaveText(formdata.first_block.title);
    }

    async haveArticleDescription_1(){        
        await expect(this.articleDescription_1).toHaveText(formdata.first_block.description);
    }

    async haveArticleNumber_2(){        
        await expect(this.articleNumber_2).toHaveText(formdata.second_block.number);
    }

    async havearAticleTitle_2(){        
        await expect(this.articleTitle_2).toHaveText(formdata.second_block.title);
    }

    async haveArticleDescription_2(){        
        await expect(this.articleDescription_2).toHaveText(formdata.second_block.description);
    }

    async haveArticleNumber_3(){        
        await expect(this.articleNumber_3).toHaveText(formdata.third_block.number);
    }

    async havearAticleTitle_3(){        
        await expect(this.articleTitle_3).toHaveText(formdata.third_block.title);
    }

    async haveArticleDescription_3(){        
        await expect(this.articleDescription_3).toHaveText(formdata.third_block.description);
    }

    async haveArticleNumber_4(){        
        await expect(this.articleNumber_4).toHaveText(formdata.fourth_block.number);
    }

    async havearAticleTitle_4(){        
        await expect(this.articleTitle_4).toHaveText(formdata.fourth_block.title);
    }

    async haveArticleDescription_4(){        
        await expect(this.articleDescription_4).toHaveText(formdata.fourth_block.description);
    }


    /*open () {
        return super.open('');
    }*/
}

export default new SolutionsPage();