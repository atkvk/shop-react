"use strict";

var React = require('react');
var Company = require('../../models/Company');
var Order = require('../../models/Order');

var SelectCompany = React.createClass({
    getDefaultProps: function () {
        var company = new Company();
        company.name = "KPN";

        var order = new Order();

        return {
            company: company,
            order: order
        }
    },
    render: function () {
        return (
            <div>
                Select company
                <p>{this.props.company.name}</p>
            </div>
        );
    }
});

module.exports = SelectCompany;