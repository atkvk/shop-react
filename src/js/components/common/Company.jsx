"use strict";

var React = require('react');
var shopActions = require('../../actions/shopActions');

var Company = React.createClass({
    removeCompany: function () {
        console.log('removing company from order');
        shopActions.removeCompany();
    },
    render: function () {
        return (
            <div className="row info-panel">
                <div className="col-md-12">
                    <div>
                        <h3>{this.props.company.handelsnaam}</h3>
                    </div>
                    <div>
                        Kvknummer: <span>{this.props.company.dossiernummer}</span>
                    </div>
                    <div>
                        <button onClick={this.removeCompany}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Company;