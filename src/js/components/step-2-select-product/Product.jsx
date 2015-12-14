"use strict";

var React = require('react');
var shopActions = require('../../actions/shopActions');

var Product = React.createClass({
    selectProduct: function () {
        console.log('select product: click on product list');
        console.log(this.props.product.productnaam);

        shopActions.selectProduct(this.props.product.productnaam);
    },
    render: function () {
        return (
            <li onClick={this.selectProduct}>
                <span>{this.props.product.productnaam}</span>
            </li>
        );
    }
});

module.exports = Product;