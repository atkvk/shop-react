var Dispatcher = require('../dispatchers/shopDispatcher');
var constants = require('../constants/actionTypes');

var ShopActions = {
    selectCompany: function (kvknummer) {
        console.log('shopaction.selectcompany:', kvknummer);
        Dispatcher.dispatch({
            actionType: constants.SELECT_COMPANY,
            kvknummer: kvknummer
        });
    },
    removeCompany: function () {
        console.log('shopaction.removeCompany');
        Dispatcher.dispatch({
            actionType: constants.REMOVE_COMPANY
        });
    },
    selectProduct: function (productId) {
        Dispatcher.dispatch({
            actionType: constants.SELECT_PRODUCT,
            productId: productId
        });
    },
    removeProduct: function(){
        Dispatcher.dispatch({
            actionType: constants.REMOVE_PRODUCT
        });
    }
};

module.exports = ShopActions;