"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path='/' handler={require('./components/App.jsx')}>
        <DefaultRoute handler={require('./components/App.jsx')}/>
        <Route name="select-company" handler={require('./components/App.jsx')}/>
        <Route name="select-product" handler={require('./components/step-2-select-product/SelectProduct.jsx')}/>
        <Route name="checkout" handler={require('')}/>
    </Route>
);

module.exports = routes;

