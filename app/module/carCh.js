/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,Route} = require('react-router');

var CarOver = React.createClass({
    render:function(){
        return (
            <div className="se-over">
                <h4 className="se-tit">
                    宝马
                </h4>
                <ul className="eve-li">
                    <li>宝马x3</li>
                    <li>宝马5系</li>
                    <li>宝马7系</li>
                    <li>宝马6系</li>
                    <li>宝马4系</li>
                </ul>
            </div>
        )
    }
})
module.exports = CarOver;