"use strict";

var EventEmitter = require('event').EventEmitter;
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var actionTypes = require('../constants/actionTypes');

const SEARCHMODEL = {
    SIMPLE: 'SIMPLE',
    COMPLEX: 'COMPLEX'
};

var search = {
    mode: SEARCHMODEL.SIMPLE,
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

var CompanySearchStore = assign({}, EventEmitter, {
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

Dispatcher.register(function(action){
    switch (action.actionType){
        case  actionTypes.SWITCH_SEARCH_MODE:
            // TODO
            CompanySearchStore.emitChange();
            break;
        case actionTypes.SEARCH:
            // TODO
            CompanySearchStore.emitChange()
    }
});

module.exports = CompanySearchStore;