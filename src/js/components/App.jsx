"use strict";
var React = require('react');

var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>Hello world</div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Shopping cart</h1>
                <p><HelloWorld /></p>
            </div>
        );
    }
});

module.exports = App;