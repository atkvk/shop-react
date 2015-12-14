"use strict";
var React = require('react');
var Steps = require('./common/Steps.jsx');
var StepContent = require('./common/StepContent.jsx');
var OrderDetails = require('./common/OrderDetails.jsx');
var orderStore = require('../stores/orderStores');

var App = React.createClass({
    getInitialState: function () {
        return {
            order: {
                company: null,
                product: null,
                currentStep: 1
            }
        }
    },
    componentDidMount: function () {
        orderStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        orderStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return (
            <div className="container">
                <h1>Shopping cart</h1>
                <div>
                    <Steps order={this.state.order}/>
                    <OrderDetails order={this.state.order}/>
                    <StepContent order={this.state.order}/>
                </div>
            </div>
        );
    },
    _onChange: function () {
        console.log('call back of orderAction.selectCompany triggered');
        this.setState({
            order: orderStore.getOrder()
        });
    }
});

module.exports = App;