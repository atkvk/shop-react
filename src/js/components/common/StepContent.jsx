"use strict";

var React = require('react');
var SelectCompany = require('../step-1-select-company/SelectCompany.jsx');
var SelectProduct = require('../step-2-select-product/SelectProduct.jsx');
var Checkout = require('../step-3-checkout/CheckOut.jsx');

var StepContent = React.createClass({
    getCurrentStepContent: function () {
        switch (this.props.order.currentStep) {
            case 1:
                return <SelectCompany />;
            case 2:
                return <SelectProduct order={this.props.order}/>;
            case 3:
                return <Checkout order={this.props.order}/>;
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