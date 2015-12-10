"use strict";

var React = require('react');
var Company = require('./Company.jsx');
var Product = require('./Product.jsx');

var OrderDetails = React.createClass({
    render: function () {
        return (
            <div>
                <Company company={this.props.order.company}/>
                <Product product={this.props.order.product}/>
            </div>
        );
    }
});

module.exports = OrderDetails;