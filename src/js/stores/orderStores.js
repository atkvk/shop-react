var Dispatcher = require('../dispatchers/shopDispatcher');
var EventEmitter = require('events').EventEmitter;
var actionTypes = require('../constants/actionTypes');
var assign = require('object-assign');
var _ = require('lodash');

var Company = require('../models/Company');
var Product = require('../models/Product');

var CHANGE_EVENT = 'change';

var order = {};

function selectCompany(kvknummer) {
    var company = new Company();
    company.kvknummer = kvknummer;

    order.company = company;
    order.currentStep = 2;
}

function removeCompany() {
    order.company = null;
    order.product = null;
    order.currentStep = 1;
}

function selectProduct(productId) {
    var product = new Product();
    product.productId = productId;
    product.name = 'Bedrijfsprofile';

    order.product = product;
    order.currentStep = 3;
}

function removeProduct() {
    order.product = null;
    order.currentStep = 2;
}

var OrderStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    getOrder: function () {
        return order;
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case actionTypes.SELECT_COMPANY:
            selectCompany(action.kvknummer);
            OrderStore.emitChange();
            break;
        case actionTypes.REMOVE_COMPANY:
            removeCompany();
            OrderStore.emitChange();
            break;
        case actionTypes.SELECT_PRODUCT:
            selectProduct(action.productId)
            OrderStore.emitChange();
            break;
        case actionTypes.REMOVE_PRODUCT:
            removeProduct();
            OrderStore.emitChange();
            break;
    }
});

module.exports = OrderStore;

