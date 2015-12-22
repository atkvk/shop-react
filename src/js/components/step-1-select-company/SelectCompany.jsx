"use strict";

var OrderFactory = require('../../models/OrderFactory');
var dataService = require('../../dataService');

var React = require('react');
var ReactDOM = require('react-dom');
var SearchPanel = require('./searchPanel/SearchPanel.jsx');
var Company = require('./Company.jsx');
var CompanySearchStore = require('../../stores/companySearchStore');

var SelectCompany = React.createClass({
    getInitialState: function () {
        return {companies: []};
    },
    componentWillMount: function () {
        CompanySearchStore.addChangeEventListener(this._onChange)
    },
    componentWillUnmount: function () {
        CompanySearchStore.removeChangeEventListener(this._onChange);
    },
    _onChange: function () {
        this.setState({companies: CompanySearchStore.getCompanies()});
    },
    render: function () {
        var companies = this.state.companies.map(function (company) {
            var kvknummer = company.dossiernummer + company.subdossiernummer + company.vestigingsnummer;
            return <Company key={kvknummer} company={company}/>
        });
        return (
            <div>
                <h3>Select company</h3>
                <SearchPanel />
                <div>
                    <ul>{companies}</ul>
                </div>
            </div>
        );
    }
});

module.exports = SelectCompany;