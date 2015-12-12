"use strict";

var React = require('react');

var Company = React.createClass({
    render: function () {
        return (
            <div className="row info-panel">
                <div>
                    Kvknummer: <span>{this.props.company.kvknummer}</span>
                </div>
                <div>
                    Name: <span>{this.props.company.name}</span>
                </div>
            </div>
        );
    }
});

module.exports = Company;