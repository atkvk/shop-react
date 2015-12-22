"use strict";

var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatchers/shopDispatcher');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var actionTypes = require('../constants/actionTypes');

const SEARCH_MODEL = {
    SIMPLE: 'SIMPLE',
    COMPLEX: 'COMPLEX'
};

var search = {
    mode: SEARCH_MODEL.SIMPLE,
    simple: {
        text: ''
    },
    complex: {
        handelsnaam: '',
        street: '',
        housenumber: '',
        postcode: '',
        city: '',

        flags: {
            vervallen: false,
            unregistered: true,
            main: true,
            sub: true,
            rechtspersoon: true
        }
    }
};

var CompanySearchStore = assign({}, EventEmitter.prototype, {
    addChangeEventListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeEventListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback)
    },
    emitChange: function(){
      this.emit(CHANGE_EVENT);
    },
    getSearch: function () {
        return search;
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType){
        case  actionTypes.SWITCH_SEARCH_MODE:
            search.mode = action.mode;
            CompanySearchStore.emitChange();
            break;
        case actionTypes.SEARCH:
            // TODO
            CompanySearchStore.emitChange()
    }
});

module.exports = CompanySearchStore;