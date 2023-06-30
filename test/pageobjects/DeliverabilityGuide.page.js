import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DeliverabilityGuidePage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameInput() {
        return $('input[name="FirstName"]');
    }
    
    get lastNameInput() {
        return $('input[name="LastName"]');
    } 

    get companyNameInput() {
        return $('input[name="Company"]');
    } 

    get emailAddressInput() {
        return $('input[name="Email"]');
    } 

    get subscriptionInput(){
        return $('input[name="Subscription_Opt_In__c"]');
    }

    get subscriptionLabel(){
        return $('label[for="mktoCheckbox_12704_0"]');
    }
 
    get sendContentButton(){
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

    async setCompanyName(companyNameValue){
        await this.companyNameInput.setValue(companyNameValue);
        await expect(await this.companyNameInput).toHaveValue(companyNameValue); 
    }

    async setEmailAddress(emailAddressValue){
        await this.emailAddressInput.setValue(emailAddressValue);
        await expect(await this.emailAddressInput).toHaveValue(emailAddressValue); 
    }

    async clickSubscription(){
        await this.subscriptionLabel.click();
        await expect(this.subscriptionInput).toBeChecked();
    }

    async clickSendContent(){
        await this.sendContentButton.click();
    } 
}

export default new DeliverabilityGuidePage();