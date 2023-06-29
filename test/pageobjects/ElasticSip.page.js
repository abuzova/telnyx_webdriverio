import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ElasticSipPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameInput() {
        return $('input[name="FirstName"]');
    }

    get lastNameInput() {
        return $('input[name="LastName"]');
    }

    get businessEmailInput() {
        return $('input[name="Email"]');
    }

    get subscriptionInput() {
        return $('input[name="Subscription_Opt_In__c"]');
    }

    get subscriptionLable() {
        return $('label[for="mktoCheckbox_13078_0"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async setFirstName(firstNameValue) {
        await this.firstNameInput.setValue(firstNameValue);
        await expect(await this.firstNameInput).toHaveValue(firstNameValue);        
    }

    async setLastName(lastNameValue) {
        await this.lastNameInput.setValue(lastNameValue);
        await expect(await this.lastNameInput).toHaveValue(lastNameValue);        
    }

    async setBusinessEmail(businessEmailValue) {
        await this.businessEmailInput.setValue(businessEmailValue);
        await expect(await this.businessEmailInput).toHaveValue(businessEmailValue);        
    }

    async clickSubscription(){
        await this.subscriptionLable.click();
        await expect(this.subscriptionInput).toBeChecked();      

    }

    async clickSubmit(){
        await this.submitBtn.click();
    }

}

export default new ElasticSipPage();