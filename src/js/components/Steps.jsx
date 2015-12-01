"use strict";

var React = require('react');

var Steps = React.createClass({
    render: function () {
        return (
            <div className="steps">
                <ul>
                    <li><span>1.</span> Bedrijf zoeken</li>
                    <li><span>2.</span> Product kiezen</li>
                    <li><span>3.</span> Bestelling afronden</li>
                </ul>
            </div>
        );
    }
});

module.exports = Steps;