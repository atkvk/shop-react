"use strict";

var React = require('react');

var EmailForm = React.createClass({
    render: function () {
        return (
            <div>
                <div><label for="">Email<input type="text"/></label></div>
                <div><label for="">Email<input type="text"/></label></div>
            </div>
        );
    }
});

module.exports = EmailForm;