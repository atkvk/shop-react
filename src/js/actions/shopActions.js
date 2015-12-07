var Dispatcher = require('../dispatchers/shopDispatcher');
var constants = require('../constants/actionTypes');

var ShopActions = {
    selectCompany: function (kvknummer) {
        Dispatcher.dispatch({
            actionType: constants.SELECT_COMPANY,
            kvknummer: kvknummer
        })
    },
    removeCompany: function (kvknummer) {
        Dispatcher.dispatch({
            actionType: constants.REMOVE_COMPANY,
            kvknummer: kvknummer
        })
    }
};

module.exports = ShopActions;