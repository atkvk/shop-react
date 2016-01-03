"use strict";

var React = require('react');
var shopActions = require('../../actions/shopActions');

var Product = React.createClass({
    removeProduct: function () {
        shopActions.removeProduct();
    },
    render: function () {
        return (
            <div className="item">
                <div><h3>{this.props.product.productnaam}</h3></div>
                <div>
                    <button onClick={this.removeProduct}>Remove</button>
                </div>
            </div>
        );
    }
});

module.exports = Product;