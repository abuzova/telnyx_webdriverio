import Page from './Page.js';
import formdata from '../resources/articleData.json' assert { type : "json" }

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VoiceApiProductsPage extends Page {
    /**
     * define selectors using getter methods
     */

    // FEATURES
    get titleMainArticleInLink() {
        return $('section:nth-child(4)>div>header>h2');
    }
    
    get descriptionMainArticleInLink(){
        return $('section:nth-child(4)>div>header>p');
    }

    get titleArticle1(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(1)>div>h3');
    }

    get titleArticle2(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(2)>div>h3');
    }

    get titleArticle3(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(3)>div>h3');
    }

    get titleArticle4(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(4)>div>h3');
    }

    get titleArticle5(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(5)>div>h3');
    }

    get titleArticle6(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(6)>div>h3');
    }

    get descriptionArticle1(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(1)>div>p');
    }

    get descriptionArticle2(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(2)>div>p');
    }

    get descriptionArticle3(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(3)>div>p');
    }

    get descriptionArticle4(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(4)>div>p');
    }

    get descriptionArticle5(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(5)>div>p');
    }

    get descriptionArticle6(){
        return $('section:nth-child(4)>div>div>ul>li:nth-child(6)>div>p');
    }

    // FEATURES
    async haveTitleMainArticle(){        
        await expect(this.titleMainArticleInLink).toHaveText(formdata.main_block.title);
    }

    async haveDescriptionMainArticleInLink(){        
        await expect(this.descriptionMainArticleInLink).toHaveText(formdata.main_block.description);
    }

    async haveTitleArticle1(){        
        await expect(this.titleArticle1).toHaveText(formdata.first_block.title);
    }

    async haveDescriptionArticle1(){        
        await expect(this.descriptionArticle1).toHaveText(formdata.first_block.description);
    }

    async haveTitleArticle2(){        
        await expect(this.titleArticle2).toHaveText(formdata.second_block.title);
    }

    async haveDescriptionArticle2(){        
        await expect(this.descriptionArticle2).toHaveText(formdata.second_block.description);
    }

    async haveTitleArticle3(){        
        await expect(this.titleArticle3).toHaveText(formdata.third_block.title);
    }

    async haveDescriptionArticle3(){        
        await expect(this.descriptionArticle3).toHaveText(formdata.third_block.description);
    }

    async haveTitleArticle4(){        
        await expect(this.titleArticle4).toHaveText(formdata.fourth_block.title);
    }

    async haveDescriptionArticle4(){        
        await expect(this.descriptionArticle4).toHaveText(formdata.fourth_block.description);
    }

    async haveTitleArticle5(){        
        await expect(this.titleArticle5).toHaveText(formdata.fifth_block.title);
    }

    async haveDescriptionArticle5(){        
        await expect(this.descriptionArticle5).toHaveText(formdata.fifth_block.description);
    }

    async haveTitleArticle6(){        
        await expect(this.titleArticle6).toHaveText(formdata.sixth_block.title);
    }

    async haveDescriptionArticle6(){        
        await expect(this.descriptionArticle6).toHaveText(formdata.sixth_block.description);
    }
}

export default new VoiceApiProductsPage();