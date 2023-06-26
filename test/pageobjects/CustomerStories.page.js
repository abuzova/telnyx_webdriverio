import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomerStoriesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get upmarketLink() {
        return $('//h3[contains(text(), "Upmarket")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    } 

    get replicantLink() {
        return $('//h3[contains(text(), "Replicant")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get weaveLink() {
        return $('//h3[contains(text(), "Weave")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get lightspeedLink() {
        return $('//h3[contains(text(), "Lightspeed")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get oomaLink() {
        return $('//h3[contains(text(), "Ooma")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get documoLink() {
        return $('//h3[contains(text(), "Documo")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get clairGlobalLink() {
        return $('//h3[contains(text(), "Clair Global")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get xpedeusLink() {
        return $('//h3[contains(text(), "Xpedeus")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get willieHoweLink() {
        return $('//h3[contains(text(), "Willie Howe")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get freedomParkLink() {
        return $('//h3[contains(text(), "FreedomPark")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get pointBlankPoliticalLink() {
        return $('//h3[contains(text(), "Point Blank Political")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get dataVoiceOptionsLink() {
        return $('//h3[contains(text(), "Data Voice Options")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get fetchLink() {
        return $('//h3[contains(text(), "Fetch")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }

    get talentifyLink() {
        return $('//h3[contains(text(), "Talentify")]/parent::div/parent::div/parent::div/parent::div/parent::a');
    }      

    
    async haveUpmarketLink(){       
        await expect(this.upmarketLink).toHaveAttr('href', '/customer-stories/upmarket');
    } 

    async haveReplicantLink(){       
        await expect(this.replicantLink).toHaveAttr('href', '/customer-stories/replicant');
    }
    
    async haveWeaveLink(){       
        await expect(this.weaveLink).toHaveAttr('href', '/customer-stories/weave');
    } 

    async haveLightspeedLink(){       
        await expect(this.lightspeedLink).toHaveAttr('href', '/customer-stories/lightspeed');
    }    

    async haveOomaLink(){       
        await expect(this.oomaLink).toHaveAttr('href', '/customer-stories/ooma');
    } 

    async haveDocumoLink(){       
        await expect(this.documoLink).toHaveAttr('href', '/customer-stories/documo');
    } 

    async haveClairGlobalLink(){       
        await expect(this.clairGlobalLink).toHaveAttr('href', '/customer-stories/clair-global');
    } 

    async haveXpedeusLink(){       
        await expect(this.xpedeusLink).toHaveAttr('href', '/customer-stories/xpedeus');
    } 

    async haveWillieHoweLink(){       
        await expect(this.willieHoweLink).toHaveAttr('href', '/customer-stories/it-consultancy-small-business');
    } 

    async haveFreedomParkLink(){       
        await expect(this.freedomParkLink).toHaveAttr('href', '/customer-stories/freedompark');
    } 

    async havePointBlankPoliticalLink(){       
        await expect(this.pointBlankPoliticalLink).toHaveAttr('href', '/customer-stories/pointblank-political-campaign-sms');
    } 

    async haveDataVoiceOptionsLink(){       
        await expect(this.dataVoiceOptionsLink).toHaveAttr('href', '/customer-stories/data-voice-options');
    } 

    async haveFetchLink(){       
        await expect(this.fetchLink).toHaveAttr('href', '/customer-stories/fetch-package');
    } 

    async haveTalentifyLink(){       
        await expect(this.talentifyLink).toHaveAttr('href', '/customer-stories/talentify');
    } 
}

export default new CustomerStoriesPage();