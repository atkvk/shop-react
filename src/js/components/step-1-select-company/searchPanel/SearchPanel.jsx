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
        return (
            <div>
                <div onClick={this.toggleSearchMode}>Toggle search</div>
                <SimpleSearch enabled={this.state.search.mode === 'SIMPLE'}/>
                <ComplexSearch enabled={this.state.search.mode === 'COMPLEX'}/>
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
