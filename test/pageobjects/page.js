/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://telnyx.com/${path}`);
    }

    get closeButton(){
        return $('div button[type="button"] svg[aria-describedby="close"]');
    }

    async clickCloseButton(){
        await this.closeButton.click();

    }
}
