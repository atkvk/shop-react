"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var shopActions = require('../../actions/shopActions');

var Product = React.createClass({
    selectProduct: function () {
        console.log('select product: click on product list');
        var productId = ReactDOM.findDOMNode(this.refs.productId).value;
        shopActions.selectProduct(productId);
    },
    render: function () {
        return (
            <li ref="productId" onClick={this.selectProduct}>
                <span>Name: </span><span>{this.props.product.name}</span>
            </li>
        );
    }
});

module.exports = Product;