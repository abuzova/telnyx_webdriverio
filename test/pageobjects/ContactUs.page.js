import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactUsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get howHelpSelect() {
        return $('select[name="Reason_for_Contact__c"]');
    }

    get firstNameInput() {
        return $('input[name="FirstName"]');
    }

    get lastNameInput() {
        return $('input[name="LastName"]');
    }

    /*get passwordInput() {
        return $('name="LastName"');
    }*/

    get emailInput() {
        return $('input[name="Email"]');
    }

    get countrySelect() {
        return $('select[name="Phone_Number_Extension__c"]');
    }

    get phoneNumberInput() {
        return $('input[name="Phone_Number_Base__c"]');
    }

    get companyWebsiteInput() {
        return $('input[name="Website"]');
    }

    get primaryInterestSelect() {
        return $('select[name="Use_Case_Form__c"]');
    }

    get pleaseDescribeRequestInput(){
        return $('textarea[name="Form_Additional_Information__c"]');
    }

    get howDidYouHearInput() {
        return $('input[name="How_did_you_hear_about_Telnyx_Open__c"]');
    }

    get subscriptionInput() { 
        return $('input[name="Subscription_Opt_In__c"]');
    }

    get subscriptionLable() { 
        return $('label[for="mktoCheckbox_13620_0"]');
    }

    get submitBtn() {
        return $('button[type="submit"]');
    }    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }

    async setHowHelp(helpValue){
       // await this.passwordInput.setValue(helpValue);
       // await expect(await this.passwordInput).toHaveValue(helpValue);

        await this.howHelpSelect.selectByVisibleText(helpValue);
        await this.howHelpSelect.isElementSelected(helpValue);
    }

    async setFirstName(firstNameValue){
        await this.firstNameInput.setValue(firstNameValue);
        await expect(await this.firstNameInput).toHaveValue(firstNameValue);
    }

    async setLastName(lastNameValue){
        await this.lastNameInput.setValue(lastNameValue);
        await expect(await this.lastNameInput).toHaveValue(lastNameValue);
    }    

    async setPleaseDescribeRequest(describeRequestValue){
        await this.pleaseDescribeRequestInput.setValue(describeRequestValue);
        await expect(await this.pleaseDescribeRequestInput).toHaveValue(describeRequestValue);        
    }

    async setEmail(emailValue) {
        await this.emailInput.setValue(emailValue);
        await expect(await this.emailInput).toHaveValue(emailValue);   
    }

    async setCountry(countryValue) {
        // await this.passwordInput.setValue(helpValue);
        // await expect(await this.passwordInput).toHaveValue(helpValue);

        await this.countrySelect.selectByVisibleText(countryValue);
        await this.countrySelect.isElementSelected(countryValue);
    } 

    async setPhoneNumber(phoneNumberValue) {
        await this.phoneNumberInput.setValue(phoneNumberValue);
        await expect(await this.phoneNumberInput).toHaveValue(phoneNumberValue);
    }

    async setCompanyWebsite(companyWebsiteValue) {
        await this.companyWebsiteInput.setValue(companyWebsiteValue);
        await expect(await this.companyWebsiteInput).toHaveValue(companyWebsiteValue);        
    }

     async setPrimaryInterest(primaryInterestValue) {
        /* await this.passwordInput.setValue(helpValue);
        await expect(await this.passwordInput).toHaveValue(helpValue); */

        await this.primaryInterestSelect.selectByVisibleText(primaryInterestValue);
        await this.primaryInterestSelect.isElementSelected(primaryInterestValue);
    } 

    async setHowDidYouHear(howDidYouHearValue) {
        await this.howDidYouHearInput.setValue(howDidYouHearValue);
        await expect(await this.howDidYouHearInput).toHaveValue(howDidYouHearValue);
    }

    async checkSubscription() { 
        await this.subscriptionLable.click();  
        await expect(this.subscriptionInput).toBeChecked();
    }   

    async clickSubmit() {
        await this.submitBtn.click();
    }
}

export default new ContactUsPage();