"use strict";

var Dispatcher = require('../dispatchers/shopDispatcher');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                // todo: get init order
                order: {}
            }
        });
    }
};

module.exports = InitializeActions;