var React = require('react');

var shopActions = require('../../../actions/shopActions');
var CompanySearchStore = require('../../../stores/companySearchStore');

var SimpleSearch = React.createClass({
    render: function () {
        return (
            <div><input type="text"/></div>
        );
    }
});

module.exports = SimpleSearch;