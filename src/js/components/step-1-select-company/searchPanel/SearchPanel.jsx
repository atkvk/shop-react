var React = require('react');

var shopActions = require('../../../actions/shopActions');
var CompanySearchStore = require('../../../stores/companySearchStore');

var SimpleSearch = require('./SimpleSearch.jsx');
var ComplexSearch = require('./ComplexSearch.jsx');

var Search = React.createClass({
    getInitialState: function () {
        return {
            search: {
                mode: 'SIMPLE'
            }
        }
    },
    componentWillMount: function () {
        CompanySearchStore.addChangeEventListener(this._onChange);
    },
    componentWillUnmount: function () {
        CompanySearchStore.removeChangeEventListener(this._onChange);
    },
    toggleSearchMode: function () {
        console.log('toggle search mode clicked');
        var mode = this.state.search.mode;
        mode = mode === 'SIMPLE' ? 'COMPLEX' : 'SIMPLE';
        shopActions.switchSearchMode(mode);
    },
    render: function () {
        var mode = this.state.search.mode;
        var toggleText = mode === 'SIMPLE' ? 'To complex search' : 'To simple search';
        return (
            <div className="search-panel">
                <div className="search-panel-header" onClick={this.toggleSearchMode}>{toggleText}</div>
                <div className="search-panel-body">
                    <SimpleSearch enabled={this.state.search.mode === 'SIMPLE'} searchText="xxx"/>
                    <ComplexSearch enabled={this.state.search.mode === 'COMPLEX'}/>
                </div>
            </div>
        );
    },
    _onChange: function () {
        this.setState({
            search: CompanySearchStore.getSearch()
        });
    }
});

module.exports = Search;
