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
                company: {
                    kvknummer: 134234324,
                    name: 'Hema'
                },
                product: {},
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
            <div>
                <h1>Shopping cart</h1>
                <div><Steps /></div>
                <div><OrderDetails order={this.state.order}/></div>
                <div><StepContent step={this.state.order.currentStep}/></div>
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