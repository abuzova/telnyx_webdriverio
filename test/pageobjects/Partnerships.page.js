import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PartnershipsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameInput() {
        return $('input[name="FirstName"]');
    }

    get lastNameInput(){
        return $('input[name="LastName"]');
    }

    get companyInput(){
        return $('input[name="Company"]');
    }

    get businessEmailInput(){
        return $('input[name="Email"]');
    }

    get countrySelect(){
        return $('select[name="Phone_Number_Extension__c"]');
    }

    get phoneNumberInput(){
        return $('input[name="Phone_Number_Base__c"]');
    }

    get partnerTypeSelect(){
        return $('select[name="Partner_Type__c"]');
    }

    get whyTelnyxPartnerInput(){
        return $('textarea[name="Form_Additional_Information__c"]');
    }

    get subscriptionInput(){
        return $('input[name="Subscription_Opt_In__c"]');
    }

    get subscriptionLabel(){
        return $('label[for="mktoCheckbox_12691_0"]');
    }

    get applyNowButton(){
        return $('button[type="submit"]');
    }


    async setFirstName(firstNameValue){
        await this.firstNameInput.setValue(firstNameValue);
        await expect(await this.firstNameInput).toHaveValue(firstNameValue);  
    }

    async setLastName(lastNameValue){
        await this.lastNameInput.setValue(lastNameValue);
        await expect(await this.lastNameInput).toHaveValue(lastNameValue); 
    }

    async setCompany(companyValue){
        await this.companyInput.setValue(companyValue);
        await expect(await this.companyInput).toHaveValue(companyValue); 
    }

    async setBusinessEmail(businessEmailValue){
        await this.businessEmailInput.setValue(businessEmailValue);
        await expect(await this.businessEmailInput).toHaveValue(businessEmailValue); 
    }

    async selectCountry(contryValue){
        await this.countrySelect.selectByVisibleText(contryValue);
        await this.countrySelect.isElementSelected(contryValue);
    }

    async setPhoneNumber(phoneNumberValue){
        await this.phoneNumberInput.setValue(phoneNumberValue);
        await expect(await this.phoneNumberInput).toHaveValue(phoneNumberValue); 
    }

    async selectPartnerType(partnerTypeValue){
        await this.partnerTypeSelect.selectByVisibleText(partnerTypeValue);
        await this.partnerTypeSelect.isElementSelected(partnerTypeValue);
    }

    async setWhyTelnyxPartner(whyTelnyxPartner){
        await this.whyTelnyxPartnerInput.setValue(whyTelnyxPartner);
        await expect(await this.whyTelnyxPartnerInput).toHaveValue(whyTelnyxPartner); 
    }

    async clickSubscription(){
        await this.subscriptionLabel.click();
        await expect(this.subscriptionInput).toBeChecked(); 
    }

    async clickApplyNow(){
        await this.applyNowButton.click();
    }
}

export default new PartnershipsPage();