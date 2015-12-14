"use strict";

var React = require('react');
var shopActions = require('../../actions/shopActions');

var Company = React.createClass({
    removeCompany: function(){
        console.log('removing company from order');
        shopActions.removeCompany();
    },
    render: function () {
        return (
            <div className="row info-panel">
                <div>
                    Kvknummer: <span>{this.props.company.dossiernummer}</span>
                </div>
                <div>
                    Name: <span>{this.props.company.handelsnaam}</span>
                </div>
                <div>
                    <button onClick={this.removeCompany}>Remove</button>
                </div>
            </div>
        );
    }
});

module.exports = Company;