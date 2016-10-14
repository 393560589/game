/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,History} = require('react-router');

//
var Slider = require('./lib/slider.js');//slider广告banner
var Navbar = require('./lib/navbar.js');//navbar导航条
var movewrap = require('./lib/moveWrap.js');//平滑左右移动
var List = require('./lib/list.js');





var Index = React.createClass({

    componentDidMount:function(){
        movewrap('listwrap','list',20,3.65);
        movewrap('wrap','all',20,3.2)
    },
    allClick:function(){
        var fWrap = React.findDOMNode(this.refs.fWrap)
        fWrap.style.height = 3.6+'rem';

    },
    checkClick:function(){
        var fWrap = React.findDOMNode(this.refs.fWrap);
        if(fWrap.style.height = 3.6+'rem'){
            fWrap.style.height = 1.8+'rem'
        }
    },
    render:function(){
        return (
            <div className="index">
                <Slider />
                <h2 className="apptool">
                    <i className="iconfont">

                    </i>
                    领奖请先完善信息哦!
                </h2>
                <div className="history clearfix">
                    <h2>游戏历史</h2>
                    <div className="listwrap" id="listwrap">
                        <ul className="clearfix" id="list" style={{left:'0'}}>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>至尊大主宰</h4>
                            </li>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>星空仕途</h4>
                            </li>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>至尊大主宰</h4>
                            </li>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>星空仕途</h4>
                            </li>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>至尊大主宰</h4>
                            </li>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>星空仕途</h4>
                            </li>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>至尊大主宰</h4>
                            </li>
                            <li className="pull-left">
                                <div className="gamelogo">
                                    <img src="" alt=""/>
                                </div>
                                <h4>星空仕途</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="secondaryNav">
                    <ul className="navSecond clearfix" id="wrap" ref="fWrap">
                        <li className="wrapA" id="1" onClick={this.checkClick}>
                            <pre className="iconfont"></pre> 推荐
                        </li>
                        <li className="wrapA" id="2" onClick={this.checkClick}>
                            <pre className="iconfont"></pre> 最新
                        </li>
                        <li className="wrapA" id="3" onClick = {this.allClick}>
                            <pre className="iconfont"></pre> 全部
                            <span className="allclass" style={{left:'0'}} id="all">
                                <a href="" className="allA">敏捷</a>
                                <a href="" className="allA">益智</a>
                                <a href="" className="allA">运动</a>
                                <a href="" className="allA">军事</a>
                                <a href="" className="allA">运动</a>
                                <a href="" className="allA">军事</a>
                                  <a href="" className="allA">益智</a>
                                <a href="" className="allA">运动</a>
                                <a href="" className="allA">军事</a>
                                <a href="" className="allA">运动</a>
                            </span>
                        </li>
                        <li className="wrapA" id="4" onClick={this.checkClick}>
                            <pre className="iconfont"></pre> 活动
                        </li>
                    </ul>
                    <List />
                </div>
                <Navbar />
            </div>
        )
    }
})
module.exports = Index;