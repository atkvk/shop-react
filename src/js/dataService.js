var Promise = require('bluebird');
//var fs = Promise.promisify(require('fs'));

var dataService = (function () {
    "use strict";

    function getCompanies() {

        return require('../data/companies.json');

        //return require('fs').readFileSync('../data/companies.json', 'utf8');

        //return JSON.parse(fs.readFile('../data/companies.json', 'utf8'));
    }

    return {
        searchCompanies: getCompanies
    }
})();

module.exports = dataService;