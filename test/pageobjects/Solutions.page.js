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
        this.healthcareLink.toHaveAttribute('href', '/solutions/healthcare'); 
    }

    async haveRetailEcommerceLink(){
        this.retailEcommerceLink.toHaveAttribute('href', '/solutions/retail-and-ecommerce');
    }

    async haveLogisticsTransportationLink(){
        this.logisticsTransportationLink.toHaveAttribute('href', '/solutions/logistics-and-transportation');
    }

    async haveTravelHospitalityLink(){
        this.travelHospitalityLink.toHaveAttribute('href', '/solutions/travel-and-hospitality');
    }

    async haveFinancialServicesLink(){
        this.financialServicesLink.toHaveAttribute('href', '/solutions/financial-services');
    }
}

export default new SolutionsPage();