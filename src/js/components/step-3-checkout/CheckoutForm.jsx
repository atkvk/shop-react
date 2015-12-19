"use strict";
var React = require('react');
var EmailForm = require('./forms/EmailForm.jsx');
var ConfirmForm = require('./forms/ConfirmForm.jsx');
var UserDetailsForm = require('./forms/UserDetailsForm.jsx');

var CheckoutForm = React.createClass({
    getDefaultProps: function () {
        return {
            payment: ''
        }
    },
    selectForm: function () {
        switch (this.props.payment) {
            case 'FAC':
                return <EmailForm />;
            case 'OGONE':
                return <UserDetailsForm />;
            case 'LOGIN':
                return <ConfirmForm />
            default:
                return null;
        }
    },
    render: function () {
        return (
            <div>{this.selectForm()}</div>
        );
    }
});

module.exports = CheckoutForm;