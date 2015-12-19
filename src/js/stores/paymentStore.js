var Dispatcher = require('../dispatchers/shopDispatcher');
var constants = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';
var actionTypes = require('../constants/actionTypes');

var payment;

var PaymentStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    getSelectedPayment: function () {
        console.log('paymentStore.getSelectedPayment: ', payment);
        return payment;
    }
});

Dispatcher.register(function(action){
    switch (action.actionType) {
        case actionTypes.SELECT_PAYMENT:
            payment = action.payment;
            PaymentStore.emitChange();
            break;
    }
});

module.exports = PaymentStore;