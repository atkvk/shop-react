var React = require('react');
var ReactDOM = require('react-dom');
var classset = require('react-classset');

var shopActions = require('../../../actions/shopActions');
var CompanySearchStore = require('../../../stores/companySearchStore');

var SimpleSearch = React.createClass({
    getInitialState: function () {
        return {
            searchText: ''
        }
    },
    componentWillMount: function () {
        this.setState({searchText: this.props.searchText});
    },
    search: function () {
        console.log('search with term: ' + this.state.searchText);
        shopActions.searchCompanies(this.state.searchText);
    },
    changeSearchText: function () {
        var state = this.state;
        state.searchText = ReactDOM.findDOMNode(this.refs.searchText).value;
        this.setState(state);
    },
    render: function () {
        var classes = classset({'is-hidden': !this.props.enabled});
        return (
            <div className={classes}>
                <h2>Simple search</h2>
                <input type="text"
                       ref="searchText"
                       value={this.state.searchText}
                       onChange={this.changeSearchText}/>
                <button onClick={this.search}>Search</button>
            </div>
        );
    }
});

module.exports = SimpleSearch;