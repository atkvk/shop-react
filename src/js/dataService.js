var Promise = require('bluebird');
//var fs = Promise.promisify(require('fs'));
var _ = lodash = require('lodash');

var dataService = (function () {
    "use strict";

    function getCompanies() {

        return require('../data/companies.json');

        //return require('fs').readFileSync('../data/companies.json', 'utf8');

        //return JSON.parse(fs.readFile('../data/companies.json', 'utf8'));
    }

    function getCompany(dossiernummer) {
        var companies = _.where(getCompanies(), {dossiernummer: dossiernummer});

        return _.first(companies);
    }

    function getProducts(kvknummer) {
        return require('../data/products.json');
    }

    function getProduct(productnaam){
        console.log('productnaam', productnaam);
        var products = _.where(getProducts(), {productnaam: productnaam});

        console.log(products);

        return _.first(products);
    }

    return {
        searchCompanies: getCompanies,
        getCompany: getCompany,
        getProducts: getProducts,
        getProduct: getProduct
    }
})();

module.exports = dataService;