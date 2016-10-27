/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,History} = require('react-router');

var Back = require('./lib/goback')
var TbcarDe = require('./lib/tbcarDe');


var Tbcar = React.createClass({
    componentDidMount:function(){

    },
    render:function(){
        return (
            <div className="tb-car">
                <Back tit='验证信息' url="/msg"/>
                <ul className="tb-det">
                    <li className="clearfix">
                        <b>车型</b>
                        <span>奥迪Q5 2015手自一体 尊享版</span>
                        <i className="iconfont pull-right">
                            >
                        </i>
                    </li>
                    <li>
                        <b>车架号</b>
                        <span>
                <input className="value" type="text" placeholder="请输入17位车架号" maxlength="17"/>
            </span>
                    </li>
                    <li>
                        <b>发动机号</b>
                        <span>
                <input className="value" type="tel" placeholder="请输入发动机号"/>
            </span>
                    </li>
                    <li className="clearfix">
                        <b>注册日期</b>
                        <span></span>
                        <i className="iconfont pull-right">
                            >
                        </i>
                    </li>
                    <li className="clearfix">
                        <b>是否过户</b>
                        <div className="button">
                <span className="circle">
                </span>
                        </div>
                    </li>
                </ul>
                <h4 className="se-tit">车辆信息</h4>
                <ul className="tb-det">
                    <li>
                        <b>姓名</b>
                        <span>
                <input className="value" type="text" placeholder="请输入本人真实姓名" maxlength="17"/>
            </span>
                    </li>
                    <li>
                        <b>身份证号</b>
                        <span>
                <input className="value" type="tel" placeholder="请输入本人身份证号"/>
            </span>
                    </li>
                </ul>
                <a href="" className="abtn">
                    下一步
                </a>
                <TbcarDe />
            </div>
        )
    }
})
module.exports = Tbcar;