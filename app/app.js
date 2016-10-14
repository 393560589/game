var React = require('react');
var {Route,Router,hashHistory} = require('react-router');
require('./config/base');
var newFastClick = require('fastclick');
document.ready = function(){
        newFastClick(document.body);
}

//module
var Index = require('./module/index.js')







var routes = (
    <Router history={hashHistory}>
        <Route name="index" path="/" component={Index} />
    </Router>
)
React.render((
    <Router routes={routes} history={hashHistory} />),
    document.body
)