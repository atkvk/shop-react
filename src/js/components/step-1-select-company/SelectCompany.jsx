"use strict";

var OrderFactory = require('../../models/OrderFactory');
var dataService = require('../../dataService');

var React = require('react');
var ReactDOM = require('react-dom');
var SearchPanel = require('./searchPanel/SearchPanel.jsx');
var Company = require('./Company.jsx');

var SelectCompany = React.createClass({
    getInitialState: function () {
        return {
            searchText: 'xx',
            extendedSearch: {
                kvknummer: '',
                street: '',
                postcode: ''
            },
            companies: []
        }
    },
    changeSearchText: function () {
        var state = this.state;
        state.searchText = ReactDOM.findDOMNode(this.refs.searchText).value;
        this.setState(state);
    },
    searchCompanies: function () {
        var companies = dataService.searchCompanies();
        this.setState({
            companies: companies
        })
    },
    render: function () {
        var companies = this.state.companies.map(function (company) {
            return <Company key={company.dossiernummer} company={company}/>
        });
        return (
            <div>
                <h3>Select company</h3>
                <p>You are searching text: <span>{this.state.searchText}</span></p>
                <SearchPanel />
                <div>
                    <input type="text"
                           ref="searchText"
                           value={this.state.searchText}
                           onChange={this.changeSearchText}/>
                    <button onClick={this.searchCompanies}>Search</button>
                </div>
                <div>
                    <ul>{companies}</ul>
                </div>
            </div>
        );
    }
});

module.exports = SelectCompany;