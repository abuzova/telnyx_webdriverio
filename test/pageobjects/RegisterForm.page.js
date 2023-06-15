import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterFormPage extends Page {
    /**
     * define selectors using getter methods
     */
    get companyEmailInput() {
        return $('input[name="email"]');
    }

    get firstNameInput() {
        return $('input[name="first_name"]');
    }

    get lastNameInput(){
        return $('input[name="last_name"]');
    }

    get passwordInput(){
        return $('input[name="password"]');
    }

    get privacyPolicyCheckbox(){
        return $('input[name="terms_and_conditions"]');
    }

    get privacyPolicyLabel(){
        return $('label[for="terms_and_conditions"]');
    }

    get subscriptionCheckbox(){
        return $('input[name="subscription_opt_in"]')
    }

    get subscriptionLabel(){
        return $('label[for="subscription_opt_in"]')
    }

    get signUpSubmit() {
        return $('form[aria-label="signup-form"]>button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    /*async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }*/

    async setCompanyEmail(emailValue){
        await this.companyEmailInput.setValue(emailValue);
        //await expect(await this.companyEmailInput).toHaveValue(emailValue, { ignoreCase: true });
        await expect(await this.companyEmailInput).toHaveValue(emailValue);
    }

    async setFirstName(firstNameValue){
        await this.firstNameInput.setValue(firstNameValue);
        //await expect(await this.firstNameInput).toHaveValue(firstNameValue, { ignoreCase: true });
        await expect(await this.firstNameInput).toHaveValue(firstNameValue);
    }

    async setLastName(lastNameValue){
        await this.lastNameInput.setValue(lastNameValue);
        //await expect(await this.businessEmailInput).toHaveValue(lastNameValue, { ignoreCase: true });
        await expect(await this.lastNameInput).toHaveValue(lastNameValue);
    }

    async setPassword(passwordValue){
        await this.passwordInput.setValue(passwordValue);
        //await expect(await this.businessEmailInput).toHaveValue(passwordValue, { ignoreCase: true });
        await expect(await this.passwordInput).toHaveValue(passwordValue);
    }

    async checkPrivacyPolicy(){
        await this.privacyPolicyLabel.click();  
        await expect(this.privacyPolicyCheckbox).toBeChecked();
    }

    async checkSubscription(){
        await this.subscriptionLabel.click();  
        await expect(this.subscriptionCheckbox).toBeChecked();
    }

    async clickSignUp(){
        await this.signUpSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new RegisterFormPage();
