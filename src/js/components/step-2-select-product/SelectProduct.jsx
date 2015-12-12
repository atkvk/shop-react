"use strict";

var React = require('react');
var Product = require('./Product.jsx');
var dataService = require('../../dataService');

var SelectProduct = React.createClass({
    getInitialState: function () {
        return {
            products: []
        }
    },
    componentWillMount: function () {
        var products = dataService.getProducts();
        this.setState({
            products: products
        })
    },
    render: function () {
        var products = this.state.products.map(function (product) {
            return <Product key={product.id} product={product}/>
        });
        return (
            <div>
                <h2>Select product</h2>
                <ul>{products}</ul>
            </div>
        );
    }
});

module.exports = SelectProduct;