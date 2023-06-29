import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SolutionsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get healthcareLink() {
        return $('a[href="/solutions/healthcare"]');
    }

    get retailEcommerceLink() {
        return $('a[href="/solutions/retail-and-ecommerce"]');
    }

    get logisticsTransportationLink(){
        return $('a[href="/solutions/logistics-and-transportation"]');
    }

    get travelHospitalityLink(){
        return $('a[href="/solutions/travel-and-hospitality"]');
    }

    get financialServicesLink(){
        return $('a[href="/solutions/financial-services"]');
    }

    async haveHealthcareLink(){
        await expect(this.healthcareLink).toHaveAttribute('href', '/solutions/healthcare'); 
    }

    async haveRetailEcommerceLink(){
        await expect(this.retailEcommerceLink).toHaveAttribute('href', '/solutions/retail-and-ecommerce');
    }

    async haveLogisticsTransportationLink(){
        await expect(this.logisticsTransportationLink).toHaveAttribute('href', '/solutions/logistics-and-transportation');
    }

    async haveTravelHospitalityLink(){
        await expect(this.travelHospitalityLink).toHaveAttribute('href', '/solutions/travel-and-hospitality');
    }

    async haveFinancialServicesLink(){
        await expect(this.financialServicesLink).toHaveAttribute('href', '/solutions/financial-services');
    }
}

export default new SolutionsPage();