import Page from './Page.js';
import relatedResourcesData from '../resources/related_resources_data.json' assert { type : "json" }

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RelatedResourcesPage extends Page {
    /**
     * define selectors using getter methods
     */

    // First block 

    get titleFirstBlock() {
        return $('ul li[title="Contact us related resources 1"] h3');
    }

    get describeFirstBlock(){
        return $('ul li[title="Contact us related resources 1"] p');
    }

    get buttonFirstBlock(){
        return $('ul li[title="Contact us related resources 1"]>div>div>a');
    }
    get link_1FirstBlock(){
        return $('ul li[title="Contact us related resources 1"] p>a:nth-child(1)');
    }
    get link_2FirstBlock(){
        return $('ul li[title="Contact us related resources 1"] p>a:nth-child(2)');
    }   

    // Second block

    get titleSecondBlock(){
        return $('ul li[title="Contact us related resources 2"] h3');
    }
    get descriptionSecondBlock(){
        return $('ul li[title="Contact us related resources 2"] p');
    }
    get buttonSecondBlock(){
        return $('ul li[title="Contact us related resources 2"]>div>div>a');
    }
    
    get link_1SecondBlock(){
        return $('ul li[title="Contact us related resources 2"] p>a:nth-child(1)');
    }
    
    get link_2SecondBlock(){
        return $('ul li[title="Contact us related resources 2"] p>a:nth-child(2)');
    } 


    // Third block     
  
    get titleThirdBlock() {
        return $('ul li[title="Contact us related resources 3"] h3');
    } 

    get descriptionThirdBlock() {
        return $('ul li[title="Contact us related resources 3"] p');
    } 

    get buttonThirdBlock() {
        return $('ul li[title="Contact us related resources 3"]>div>div>a');
    } 

     get link_1ThirdBlock() {
        return $('ul li[title="Contact us related resources 3"] p>a:nth-child(1)');
    } 

   
    // First block 

    async haveTitleFirstBlock(){        
        await expect(this.titleFirstBlock).toHaveText(relatedResourcesData.first_block.title);
    }

    async haveDescriptionFirstBlock(){        
        await expect(this.descriptionFirstBlock).toHaveText(relatedResourcesData.first_block.description);
    }

    async haveTextLinkFirstBlock(){        
        await expect(this.buttonFirstBlock).toHaveText(relatedResourcesData.first_block.button_title);
    }

    async haveAttrLinkFirstBlock(){        
        await expect(this.buttonFirstBlock).toHaveAttrContaining('href', relatedResourcesData.first_block.button_attribute);
    }

    async haveAttrLink_1FirstBlock(){        
        await expect(this.link_1FirstBlock).toHaveAttrContaining('href', relatedResourcesData.first_block.link_1);
    }

    async haveAttrLink_2FirstBlock(){        
        await expect(this.link_2FirstBlock).toHaveAttrContaining('href', relatedResourcesData.first_block.link_2);
    }


    // Second block

    async haveTitleSecondBlock(){        
        await expect(this.titleSecondBlock).toHaveText(relatedResourcesData.second_block.title);
    }

    async haveDescriptionSecondBlock(){        
        await expect(this.descriptionSecondBlock).toHaveText(relatedResourcesData.second_block.description);
    }

    async haveTextLinkSecondBlock(){        
        await expect(this.buttonSecondBlock).toHaveText(relatedResourcesData.second_block.button_title);
    }

    async haveAttrLinkSecondBlock(){        
        await expect(this.buttonSecondBlock).toHaveAttrContaining('href', relatedResourcesData.second_block.button_attribute);
    }

    async haveAttrLink_1SecondBlock(){        
        await expect(this.link_1SecondBlock).toHaveAttrContaining('href', relatedResourcesData.second_block.link_1);
    }

    async haveAttrLink_2SecondBlock(){        
        await expect(this.link_2SecondBlock).toHaveAttrContaining('href', relatedResourcesData.second_block.link_2);
    }

    // Third block

    async haveTitleThirdBlock(){        
        await expect(this.titleThirdBlock).toHaveText(relatedResourcesData.third_block.title);
    }

    async haveDescriptionThirdBlock(){        
        await expect(this.descriptionThirdBlock).toHaveText(relatedResourcesData.third_block.description);
    }

    async haveTextLinkThirdBlock(){        
        await expect(this.buttonThirdBlock).toHaveText(relatedResourcesData.third_block.button_title);
    }    

    async haveAttrLinkThirdBlock(){        
        await expect(this.buttonThirdBlock).toHaveAttrContaining('href', relatedResourcesData.third_block.button_attribute);
    }
    
    async haveAttrLink_1ThirdBlock(){        
        await expect(this.link_1ThirdBlock).toHaveAttrContaining('href', relatedResourcesData.third_block.link_1);
    }

}

export default new RelatedResourcesPage();