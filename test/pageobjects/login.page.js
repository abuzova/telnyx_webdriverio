import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get businessEmailInput() {
        return $('form div div:nth-child(1) label input[name="email"]');
    }

    get passwordInput() {
        return $('form div div:nth-child(2) label input[name="password"]');
    }

    get rememberMeInput() {
        return $('form div div:nth-child(3) label input[name="remember_me"]');
    }

    get rememberMeLabel() {
        return $('form div div:nth-child(3) label');
    }

    get logInBtn() {
        return $('button[type="submit"]');
    }   

    async setBusinessEmail(emailValue){
        await this.businessEmailInput.setValue(emailValue);
        await expect(await this.businessEmailInput).toHaveValue(emailValue, { ignoreCase: true });
    }

    async setPassword(passwordValue){
        await this.passwordInput.setValue(passwordValue);
        await expect(await this.passwordInput).toHaveValue(passwordValue);
    }

    async checkRememberMe(){
        await this.rememberMeLabel.click();  
        await expect(this.rememberMeInput).toBeChecked();
    }

    async clickLogIn(){
        await this.logInBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }   
}

export default new LoginPage();