var React = require('react');
var {Route,Router,browserHistory} = require('react-router');
require('./config/base');

var newFastClick = require('fastclick');
document.ready = function(){
        newFastClick(document.body);
}

//module
var Index = require('./module/index.js')
var Tbmsg = require('./module/tbmsg');
var Tbcar = require('./module/tbcar')





var routes = (
    <Router history={browserHistory}>
        <Route name="index" path="/" component={Index} />
        <Route name="tbmsg" path="/msg" component={Tbmsg} />
        <Route name="car" path="/car" component={Tbcar} />
    </Router>
)
React.render((
    <Router routes={routes} history={browserHistory} />),
    document.body
)