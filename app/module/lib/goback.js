/**
 * Created by dell on 2016/10/25.
 */
var React = require('react');
var {Router,Route,Link} = require('react-router');

var Back = React.createClass({
    render:function(){
        return (
            <Link to={this.props.url} className="goback" id={this.props.id}>
                <i className="iconfont pull-left">
                    &#xe601;
                </i>
                {this.props.tit}
            </Link>
        )
    }
})
module.exports=Back;