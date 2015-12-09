var Dispatcher = require('../dispatchers/shopDispatcher');
var EventEmitter = require('events').EventEmitter;
var actionTypes = require('../constants/actionTypes');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var order = {};

var OrderStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case actionTypes.SELECT_COMPANY:
            OrderStore.emitChange();
            break;
    }

});

modules.exports = OrderStore;

