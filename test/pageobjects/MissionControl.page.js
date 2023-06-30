import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MissionControlPage extends Page {
    /**
     * define selectors using getter methods
     */

    // HOW IT WORKS
    get firstButton() {
        return $('//section//header/strong[contains(text(), "HOW IT WORKS")]/parent::header/following-sibling::div').$('button:nth-child(1)');
    }

    get secondButton() {
        return $('//section//header/strong[contains(text(), "HOW IT WORKS")]/parent::header/following-sibling::div').$('button:nth-child(2)');
    }

    get thirdButton() {
        return $('//section//header/strong[contains(text(), "HOW IT WORKS")]/parent::header/following-sibling::div').$('button:nth-child(3)');
    }

    get fourthButton() {
        return $('//section//header/strong[contains(text(), "HOW IT WORKS")]/parent::header/following-sibling::div').$('button:nth-child(4)');
    }
     
       
    // HOW IT WORKS

    async clickFirstButton(){
        await this.firstButton.click();
        await expect(this.firstButton).toHaveAttr('data-state', 'active');
    }

    async clickSecondButton(){
        await this.secondButton.click();
        await expect(this.secondButton).toHaveAttr('data-state', 'active');
    }

    async clickThirdButton(){
        await this.thirdButton.click();
        await expect(this.thirdButton).toHaveAttr('data-state', 'active');
    }

    async clickFourthButton(){
        await this.fourthButton.click();
        await expect(this.fourthButton).toHaveAttr('data-state', 'active');
    }
}

export default new MissionControlPage();