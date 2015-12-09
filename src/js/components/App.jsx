"use strict";
var React = require('react');
var Steps = require('./Steps.jsx');
var StepContent = require('./StepContent.jsx');

var App = React.createClass({
    getInitialState: function () {
        return {
            currentStep: 1
        }
    },
    render: function () {
        return (
            <div>
                <h1>Shopping cart</h1>
                <div><Steps /></div>
                <div><StepContent step={this.state.currentStep}/></div>
            </div>
        );
    }
});

module.exports = App;