import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsSIPTrunkingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cURTab() {
        return $('//button/span[contains(text(), "cURL")]');
    } 
    
    get PythonTab(){
        return $('//button/span[contains(text(), "Python")]');
    }

    get RubyTab(){
        return $('//button/span[contains(text(), "Ruby")]');
    }

    get NodeTab(){
        return $('//button/span[contains(text(), "Node")]');
    }

    get PHPTab(){
        return $('//button/span[contains(text(), "PHP")]');
    }

    get NETTab(){
        return $('//button/span[contains(text(), "NET")]');
    }

    get cURBlock(){
        return $('//header/h2[contains(text(), "Start building")]/parent::header/following-sibling::div/div').$('div:nth-child(2)');
    }

    get PythonBlock(){
        return $('//header/h2[contains(text(), "Start building")]/parent::header/following-sibling::div/div').$('div:nth-child(3)');
    }

    get RubyBlock(){
        return $('//header/h2[contains(text(), "Start building")]/parent::header/following-sibling::div/div').$('div:nth-child(4)');
    }

    get NodeBlock(){
        return $('//header/h2[contains(text(), "Start building")]/parent::header/following-sibling::div/div').$('div:nth-child(5)');
    }

    get PHPBlock(){
        return $('//header/h2[contains(text(), "Start building")]/parent::header/following-sibling::div/div').$('div:nth-child(6)');
    }

    get NETBlock(){
        return $('//header/h2[contains(text(), "Start building")]/parent::header/following-sibling::div/div').$('div:nth-child(7)');
    }

    
    async activecUR(){
        await this.cURTab.click();
        await expect(this.cURBlock).toHaveAttr('data-state', 'active');
        //console.log(await this.cURBlock.getText());    
    } 

    async activePython(){ 
        await this.PythonTab.click();       
        await expect(this.PythonBlock).toHaveAttr('data-state', 'active');
        //console.log(await this.cURBlock.getText());    
    } 

    async activeRuby(){ 
        await this.RubyTab.click();       
        await expect(this.RubyBlock).toHaveAttr('data-state', 'active');
        //console.log(await this.cURBlock.getText());    
    } 

    async activeNode(){ 
        await this.NodeTab.click();       
        await expect(this.NodeBlock).toHaveAttr('data-state', 'active');
        //console.log(await this.cURBlock.getText());    
    } 

    async activePHP(){
        await this.PHPTab.click();        
        await expect(this.PHPBlock).toHaveAttr('data-state', 'active');
        //console.log(await this.cURBlock.getText());    
    } 

    async activeNET(){ 
        await this.NETTab.click();       
        await expect(this.NETBlock).toHaveAttr('data-state', 'active');
        //console.log(await this.cURBlock.getText());    
    } 
}

export default new ProductsSIPTrunkingPage();
