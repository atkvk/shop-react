"use strict";

var React = require('react');
var SelectCompany = require('./step-1-select-company/SelectCompany.jsx');
var SelectProduct = require('./step-2-select-product/SelectProduct.jsx');
var Checkout = require('./step-3-checkout/CheckOut.jsx');

var StepContent = React.createClass({
    getCurrentStepContent: function () {
        switch (this.props.step) {
            case 1:
                return <SelectCompany />;
            case 2:
                return <SelectProduct />;
            case 3:
                return <Checkout />;
            default:
                return <SelectCompany />;
        }
    },
    render: function () {
        return (
            <div>{this.getCurrentStepContent()}</div>
        );
    }
});

module.exports = StepContent;