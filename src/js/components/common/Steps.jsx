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
                <div className={step1class}><span>1.</span> Bedrijf zoeken</div>
                <div className={step2class}><span>2.</span> Product kiezen</div>
                <div className={step3class}><span>3.</span> Bestelling afronden</div>
            </div>
        );
    }
});

module.exports = Steps;