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

    return {
        searchCompanies: getCompanies,
        getCompany: getCompany,
        getProducts: getProducts
    }
})();

module.exports = dataService;