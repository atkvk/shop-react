"use strict";

var React = require('react');

var Product = React.createClass({
    render: function () {
        return (
            <div className="row info-panel">
                <div className="col-md-12">
                    <div className="well-lg">
                        <div>Product: {this.props.product.name}</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Product;