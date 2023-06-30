import Page from './Page.js';


class FAQBlockPage extends Page {
   

    // FAQ

    get questionBlock1() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(1) button'); 
    }

    get questionBlock2() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(2) button'); 
    }

    get questionBlock3() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(3) button'); 
    }

    get questionBlock4() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(4) button'); 
    }

    get questionBlock5() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(5) button'); 
    }

    get questionBlock6() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(6) button'); 
    }

    get questionBlock7() {
        return $('section:nth-child(12) div div:nth-child(2) div div:nth-child(7) button'); 
    }   


    get descriptionBlock1(){
        return $('section:nth-child(12)>div>div:nth-child(2)>div>div:nth-child(1)>div'); // data-state="open"
    }

    get descriptionBlock2(){
        return $('section:nth-child(12)>div>div:nth-child(2)>div>div:nth-child(2)>div'); 
    }

    get descriptionBlock3(){
        return $('section:nth-child(12)>div>div:nth-child(2)>div>div:nth-child(3)>div'); 
    }

    get descriptionBlock4(){
        return $('section:nth-child(12)>div>div:nth-child(2)>div>div:nth-child(4)>div'); 
    }

    get descriptionBlock5(){
        return $('section:nth-child(12)>div>div:nth-child(2)>div>div:nth-child(5)>div'); 
    }

    get descriptionBlock6(){
        return $('section:nth-child(12)>div>div:nth-child(2)>div>div:nth-child(6)>div'); 
    }

    get descriptionBlock7(){
        return $('section:nth-child(12)>div>div:nth-child(2)>div>div:nth-child(7)>div'); 
    }
   
      
     // FAQ

    async clickFirstButton(){
        await this.questionBlock1.click();
        await expect(this.descriptionBlock1).toHaveAttr('data-state', 'open'); 
    }

    async clickSecondButton(){
        await this.questionBlock2.click();
        await expect(this.descriptionBlock2).toHaveAttr('data-state', 'open'); 
    }

    async clickThirdButton(){
        await this.questionBlock3.click();
        await expect(this.descriptionBlock3).toHaveAttr('data-state', 'open'); 
    }

    async clickFourthButton(){
        await this.questionBlock4.click();
        await expect(this.descriptionBlock4).toHaveAttr('data-state', 'open'); 
    }

    async clickFifthButton(){
        await this.questionBlock5.click();
        await expect(this.descriptionBlock5).toHaveAttr('data-state', 'open'); 
    }

    async clickSixthButton(){
        await this.questionBlock6.click();
        await expect(this.descriptionBlock6).toHaveAttr('data-state', 'open'); 
    }

    async clickSeventhButton(){
        await this.questionBlock7.click();
        await expect(this.descriptionBlock7).toHaveAttr('data-state', 'open'); 
    }

}

export default new FAQBlockPage()