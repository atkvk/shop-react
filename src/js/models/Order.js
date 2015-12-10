"use strict";

var Company = require('./Company');
var Product = require('./Product');

var Order = (function () {

    function Order() {
        this._company = new Company();
        this._product = new Product();
    }

    Object.defineProperty(Order.prototype, "company", {
        get: function () {
            return this._company;
        },
        set: function(value){
            this._company = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Order.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function(value){
            this._product = value;
        },
        enumerable: true,
        configurable: true
    });

    Order.prototype.currentStep = function () {
        return 1;
    };

    return Order;
})();

module.exports = Order;