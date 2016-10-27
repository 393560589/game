/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,History} = require('react-router');
var reqwest = require('reqwest');
var url = require('../item/item')

var cars=[
    '大众','奔驰','宝马','凯迪拉克','日产','福特','别克','雪弗兰','捷豹','起亚'
]
var TbcarDe = React.createClass({

    componentDidMount:function(){
        var tbcarDe = document.getElementById('tbcarDe'),
            carWrap = document.getElementById('carWrap');
        var fh = tbcarDe.offsetHeight;
        var wh = window.screen.availHeight;
        carWrap.style.bottom = 0

        reqwest({
            url:url+'/V1/insurance',
            method:'post',
            data:{
                modelName:'马自达',
                comCode:'33019102',
                _action:'queryJyVehicleConfiguration'
            },
            success:function(xrh){
                console.log(typeof xrh)
                testJson = eval("(" + xrh + ")");
                console.log(testJson)
                console.log(typeof testJson)
            }
        })
    },
    render:function(){

        return (
            <div className="carWrap" id="carWrap">
                <div className="tbcarDe" id="tbcarDe">
                    <div className="serch">
                        <i className="iconfont">&#xe605;</i>
                        <form action="">
                            <input type="search" placeholder="请输入品牌车名称搜索"/>
                        </form>
                    </div>
                    <h4 className="se-tit">
                        热门品牌
                    </h4>
                    <ul className="hot-li clearfix">
                        {
                            cars.map(function(item){
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    <h4 className="se-tit">
                        车型检索
                    </h4>
                    <ul className="eve-li">
                        <li>奥迪</li>
                        <li>奥卡路</li>
                        <li>奔驰</li>
                        <li>宝马</li>
                        <li>本田</li>
                        <li>标志</li>
                        <li>保时捷</li>
                        <li>巴博斯</li>
                        <li>北京</li>
                        <li>宝骏</li>
                        <li>奔腾</li>
                        <li>巴博斯</li>
                        <li>北京</li>
                        <li>宝骏</li>
                        <li>奔腾</li>
                        <li>巴博斯</li>
                        <li>北京</li>
                        <li>宝骏</li>
                        <li>奔腾</li>
                    </ul>
                </div>
            </div>
        )
    }
})
module.exports = TbcarDe;