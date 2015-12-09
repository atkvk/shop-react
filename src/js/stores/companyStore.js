var Dispatcher = require('../dispatchers/shopDispatcher');
var constants = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var companies = [];

var ShopStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    getCompanies: function () {
        return [{
            id: 1, name: 'KPN'
        }]
    }
});

Dispatcher.register(function(action){
    switch (action.actionType){
        case ActionTypes.SELECT_COMPANY:
            ShopStore.emitChange();
            break;
        case ActionTypes.REMOVE_COMPANY:
            ShopStore.emitChange();
    }
});

module.exports = ShopStore;