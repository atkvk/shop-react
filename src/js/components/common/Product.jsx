"use strict";

var React = require('react');
var shopActions = require('../../actions/shopActions');

var Product = React.createClass({
    removeProduct: function(){
        shopActions.removeProduct();
    },
    render: function () {
        return (
            <div className="row info-panel">
                <div className="col-md-12">
                    <div className="well-lg">
                        <div>Product: {this.props.product.name}</div>
                        <div>
                            <button onClick={this.removeProduct}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Product;