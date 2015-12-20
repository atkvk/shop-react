"use strict";

var React = require('react');
var shopActions = require('../../actions/shopActions');

var Payment = React.createClass({
    propTypes: {
        payment: React.PropTypes.object
    },
    selectPayment: function(){
        console.log('User Interaction: select payment clicked');
        shopActions.selectPayment(this.props.payment.code);
    },
    render: function () {
        return (
            <li onClick={this.selectPayment}>{this.props.payment.description}</li>
        );
    }
});

module.exports = Payment;