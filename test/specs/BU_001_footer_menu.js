import FooterPage from '../pageobjects/Footer.page.js'

describe('Checking correct the Footer menu work', () => {
    beforeEach(async () => {
        await browser.setWindowSize(1800, 1500);
        FooterPage.open('');
        FooterPage.closeButton.click();
    });
    it('Checking correct the Footer menu work', async () => {
        await FooterPage.haveAttrHomeFooterMenuItem();
        await FooterPage.haveAttrReportAbuseFooterMenuItem();
        await FooterPage.haveAttrPrivacyPolicyFooterMenuItem();
        await FooterPage.haveAttrCoolkiePolicyFooterMenuItem();
        await FooterPage.haveAttrLawEnforcementFooterMenuItem();
        await FooterPage.haveAttrAcceptableUseFooterMenuItem();
        await FooterPage.haveAttrReleaseNotesFooterMenuItem();
        await FooterPage.haveAttrCareersFooterMenuItem();
        await FooterPage.haveAttrWebsiteTermsAndConditionsFooterMenuItem();
        await FooterPage.haveAttrTermsAndConditionsOfServiceFooterMenuItem();
        await FooterPage.haveAttrBetterTwiltioFooterMenuItem();
    }) 
})