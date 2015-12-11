var Dispatcher = require('../dispatchers/shopDispatcher');
var EventEmitter = require('events').EventEmitter;
var actionTypes = require('../constants/actionTypes');
var assign = require('object-assign');
var _ = require('lodash');

var Company = require('../models/Company');

var CHANGE_EVENT = 'change';

var order = {};

function selectCompany(kvknummer) {
    var company = new Company();
    company.kvknummer = kvknummer;

    order.company = company;
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
    }
});

module.exports = OrderStore;

