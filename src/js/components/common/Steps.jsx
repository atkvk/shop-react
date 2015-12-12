"use strict";

var React = require('react');
var classset = require('react-classset');

var Steps = React.createClass({
    render: function () {

        var step1class = classset({'is-active': this.props.order.currentStep === 1});
        var step2class = classset({'is-active': this.props.order.currentStep === 2});
        var step3class = classset({'is-active': this.props.order.currentStep === 3});

        return (
            <div className="steps">
                <ul>
                    <li className={step1class}><span>1.</span> Bedrijf zoeken</li>
                    <li className={step2class}><span>2.</span> Product kiezen</li>
                    <li className={step3class}><span>3.</span> Bestelling afronden</li>
                </ul>
            </div>
        );
    }
});

module.exports = Steps;