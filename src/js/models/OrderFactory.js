var Company = require('./Company');
var Order = require('./Order');
"use strict";

function createOrder() {
    var company = new Company();
    company.name = "KPN";

    var order = new Order();
    order.company = company;
}

module.exports = {
    createOrder: createOrder
};