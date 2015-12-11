var React = require('react');
var shopActions = require('../../actions/shopActions');

var Companies = React.createClass({
    getDefaultProps: function () {
        return {
            company: {
                kvknummer: '12323',
                name: 'a default company'
            }
        }
    },
    selectCompany: function(){
        console.log('select company clicked');

        shopActions.selectCompany("123213213");
    },
    render: function () {
        return (
            <li onClick={this.selectCompany}>
                <span>{this.props.company.kvknummer}</span>
                <span>{this.props.company.name}</span>
            </li>
        );
    }
});

module.exports = Companies;