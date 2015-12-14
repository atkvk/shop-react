var React = require('react');
var shopActions = require('../../actions/shopActions');

var Companies = React.createClass({
    getDefaultProps: function () {
        return {
            company: {
                dossiernummer: '12323',
                handelsnaam: 'a default company'
            }
        }
    },
    selectCompany: function(){
        console.log('select company clicked');

        shopActions.selectCompany(this.props.company.dossiernummer);
    },
    render: function () {
        return (
            <li onClick={this.selectCompany}>
                <span>{this.props.company.dossiernummer}</span>
                <span>{this.props.company.handelsnaam}</span>
            </li>
        );
    }
});

module.exports = Companies;