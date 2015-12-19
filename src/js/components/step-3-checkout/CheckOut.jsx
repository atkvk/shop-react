"use strict";

var React = require('react');
var CheckoutForm = require('./CheckoutForm.jsx');
var Payment = require('./Payment.jsx');
var paymentStore = require('../../stores/paymentStore');

var Checkout = React.createClass({
    getInitialState: function () {
        return {
            payment: ''
        }
    },
    getDefaultProps: function () {
        return {
            payments: [
                {code: "FAC", description: "Factuur"},
                {code: "OGONE", description: "IDEAL/Credit card"},
                {code: "LOGIN", description: "Toegangscode"}
            ]
        };
    },
    componentDidMount: function () {
        paymentStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        paymentStore.removeChangeListener(this._onChange);
    },
    renderPayments: function () {
        var payments = this.props.payments.map(function (payment) {
            return <Payment key={payment.code} payment={payment} />
        });
        return (
            <ul>{payments}</ul>
        );
    },
    render: function () {
        return (
            <div>
                <h2>Checkout</h2>
                <p>You are going to checkout</p>
                <div>{this.renderPayments()}</div>
                <CheckoutForm payment={this.state.payment}/>
                <button disabled>Put your order</button>
            </div>
        );
    },
    _onChange: function(){

        var selectedPayment = paymentStore.getSelectedPayment();
        console.log('Checkout._onchange', selectedPayment);
        this.setState({
            payment: selectedPayment
        });
    }
});

module.exports = Checkout;