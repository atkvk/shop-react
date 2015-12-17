"use strict";

var React = require('react');

var Checkout = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Checkout</h2>
                <p>You are going to checkout</p>
                <button disabled>Put your order</button>
            </div>
        );
    }
});

module.exports = Checkout;