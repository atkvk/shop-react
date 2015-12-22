var React = require('react');
var classset = require('react-classset');

var shopActions = require('../../../actions/shopActions');
var CompanySearchStore = require('../../../stores/companySearchStore');

var SimpleSearch = React.createClass({
    getDefaultProps: function () {
        return {
            enabled: false
        }
    },
    search: function () {

    },
    render: function () {
        var classes = classset({'is-hidden': this.props.enabled});
        return (
            <div className={classes}>
                <h2>Simple search</h2>
                <input type="text"/>
            </div>
        );
    }
});

module.exports = SimpleSearch;