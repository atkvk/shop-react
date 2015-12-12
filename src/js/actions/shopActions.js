var Dispatcher = require('../dispatchers/shopDispatcher');
var constants = require('../constants/actionTypes');

var ShopActions = {
    selectCompany: function (kvknummer) {
        console.log('shopaction.selectcompany:', kvknummer);
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
    },
    selectProduct: function (productId) {
        Dispatcher.dispatch({
            actionType: constants.SELECT_PRODUCT,
            productId: productId
        })
    }
};

module.exports = ShopActions;