/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,History} = require('react-router');
var url = require('./item/item');


var Back = require('./lib/goback.js');//slider广告banner
var TbPro = require('./lib/tbpro');

var TbMsg = React.createClass({
    getInitialState:function(){
        return {
            city:null,
            carId:null,
            phone:null
        }
    },
    componentDidMount:function(){
        var proWrap = document.getElementById('proWrap'),
                pro = document.getElementById('pro'),
                    h = -proWrap.offsetHeight+'px',
            tTop = document.getElementById('tTop'),
            sure = document.getElementById('sure');

        var dataMsg ={};
        var nextPage = document.getElementById('nextPage');//下一页

        var cityval = document.getElementById('cityval');//城市
        var carId =document.getElementById('carId');//车牌
        var iphoneNum = document.getElementById('iphoneNum');//手机号

        nextPage.onclick = function(){
            if(carId.value != ''){
                if(say.isLicenseNo(carId.value)){
                    dataMsg.carId = carId.value
                }
            }
            console.log(dataMsg)
        };

        pro.onclick = function(){
            tTop.style.position='fixed';
            tTop.style.top=0;
            proWrap.style.bottom = parseFloat(h)+window.screen.availHeight+'px';
            sure.style.display = 'block';

        }
    },
    render:function(){
        return (
            <div className="tb-msg">

                <Back tit='投保信息' url="/"/>

                <ul className="tb-det">
                    <li className="clearfix" id="pro">
                        <b>投保城市</b>
                        <span id="cityval">杭州</span>
                        <i className="iconfont">
                            >
                        </i>
                    </li>
                    <li>
                        <b>车牌号</b>
                        <span>
                            <input id="carId" className="value" type="text" placeholder="请输入车牌信息" maxLength="7"/>
                        </span>
                    </li>
                    <li>
                        <b>手机号</b>
                        <span>
                            <input id="iphoneNum" className="value" type="tel" placeholder="请输入11位手机号码" maxLength="11"/>
                        </span>
                    </li>
                </ul>
                <h4 className="se-tit">保险公司</h4>
                <ul className="companys">
                    <li>
                        <b>大地保险</b>
                        <i className="iconfont pull-right">
                            &#xe600;
                        </i>
                    </li>
                </ul>
                <Link to="/car" className="abtn" id="nextPage">
                    下一步
                </Link>
                <TbPro />
            </div>
        )
   }
});
module.exports = TbMsg;