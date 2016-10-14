/**
 * Created by gongchuangshidai on 16/10/11.
 */
var React = require('react');
var style = require('.././css/list.css')
var {Router,Route,Link} = require('react-router');



var jsonData = [
    {
        src:'',
        to:'',
        title:'2货一家乐',
        type:'单机',
        people:'3310'
    },
    {
        src:'',
        to:'',
        title:'全家服',
        type:'网游',
        people:'31310'
    },
    {
        src:'',
        to:'',
        title:'时尚传奇',
        type:'网游',
        people:'1110'
    },
    {
        src:'',
        to:'',
        title:'魔兽狗熊转',
        type:'单机',
        people:'31310'
    }
]
var List = React.createClass({
    render:function(){
        var contanter = jsonData.map(function(item){
            return (
                <Link to={item.to} className="clearfix">
                    <div className={style.gameWrap}>
                        <img src={item.src} alt=""/>
                    </div>
                    <div className={style.listTip}>
                        <p>{item.title}</p>
                        <p>{item.type} | {item.people}人在玩</p>
                    </div>
                    <i className={style.iconfont}> > </i>
                </Link>
            )
        })
        return (
            <ul className={style.gamelist}>
                {contanter}
            </ul>
        )
    }
})
module.exports =List;