import Page from './Page.js';

class FooterPage extends Page {
   
    get homeFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Data and Privacy")]');
    }  

    get reportAbuseFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Report Abuse")]');
    }

    get privacyPolicyFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Privacy Policy")]');
    }

    get coolkiePolicyFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Cookie Policy")]');
    }

    get lawEnforcementFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Law Enforcement")]');
    }

    get acceptableUseFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Acceptable Use")]');
    }

    get releaseNotesFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Release Notes")]');
    }

    get careersFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Careers")]');
    }

    get websiteTermsAndConditionsFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Website Terms and Conditions")]');
    }

    get termsAndConditionsOfServiceFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "Terms and conditions of service")]');
    }

    get betterTwiltioFooterMenuItem(){
        return $('//footer//ul/li/a[contains(text(), "The Better Twilio Alternative")]');
    }


    async haveAttrHomeFooterMenuItem(){
        await expect(this.homeFooterMenuItem).toHaveAttribute('href', '/data-privacy'); 
    }


    async haveAttrReportAbuseFooterMenuItem(){
        await expect(this.reportAbuseFooterMenuItem).toHaveAttribute('href', '/report-abuse');
    }

    async haveAttrPrivacyPolicyFooterMenuItem(){
        await expect(this.privacyPolicyFooterMenuItem).toHaveAttribute('href', '/privacy-policy');
    }
    

    async haveAttrCoolkiePolicyFooterMenuItem(){
        await expect(this.coolkiePolicyFooterMenuItem).toHaveAttribute('href', '/cookie-policy');
    }

    async haveAttrLawEnforcementFooterMenuItem(){
        await expect(this.lawEnforcementFooterMenuItem).toHaveAttribute('href', '/law-enforcement-request');
    }

    async haveAttrAcceptableUseFooterMenuItem(){
        await expect(this.acceptableUseFooterMenuItem).toHaveAttribute('href', '/acceptable-use-policy');
    }

    async haveAttrReleaseNotesFooterMenuItem(){
        await expect(this.releaseNotesFooterMenuItem).toHaveAttribute('href', '/release-notes');
    }

    async haveAttrCareersFooterMenuItem(){
        await expect(this.careersFooterMenuItem).toHaveAttribute('href', '/careers');
    }

    async haveAttrWebsiteTermsAndConditionsFooterMenuItem(){
        await expect(this.websiteTermsAndConditionsFooterMenuItem).toHaveAttribute('href', '/terms-and-conditions');
    }

    async haveAttrTermsAndConditionsOfServiceFooterMenuItem(){
        await expect(this.termsAndConditionsOfServiceFooterMenuItem).toHaveAttribute('href', '/terms-and-conditions-of-service');
    }

    async haveAttrBetterTwiltioFooterMenuItem(){
        await expect(this.betterTwiltioFooterMenuItem).toHaveAttribute('href', '/the-better-twilio-alternative');
    }
  
}

export default new FooterPage();