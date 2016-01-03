"use strict";

var React = require('react');
var Company = require('./Company.jsx');
var Product = require('./Product.jsx');

var OrderDetails = React.createClass({
    renderCompany: function(){
        if(this.props.order.company){
          return  <Company company={this.props.order.company}/>;
        }else{
            return null;
        }
    },
    renderProduct: function(){
        if(this.props.order.product){
            return  <Product product={this.props.order.product}/>;
        }else{
            return null;
        }
    },
    render: function () {
        return (
            <div className="flex-box">
                {this.renderCompany()}
                {this.renderProduct()}
            </div>
        );
    }
});

module.exports = OrderDetails;