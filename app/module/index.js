/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,browserHistory} = require('react-router');

//
var Slider = require('./lib/slider.js');//slider广告banner
var reqwest =require('reqwest')
var url = require('./item/item.js')

var allWay = require('./item/publicFun.js');
var Load = require('./lib/Nextpage.js')


var Index = React.createClass({
    getInitialState:function(){
        return {
            isbanner:false,
            banner:null,
        }
    },
    componentDidMount:function () {
        var _this = this;


        reqwest({
            method : 'get',
            url : url+'V1/banner',
            data:{
                type:'index'
            },
            success : function (resp) {
                if(_this.isMounted()){
                    _this.setState({
                        isbanner:true,
                        banner:resp
                    })
                }
            }
        });

        var swiper = new Swiper('.index .swiper-container', {
            pagination: '.index .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });

    },
    moveColor:function(event){
        var tar = event.currentTarget;
        tar.style.backgroundColor='#5576d4';

    },
    leaveColor:function(event){
        var $ = new allWay();
        var tar = event.currentTarget;
        tar.style.backgroundColor='#5A7CDD';

        var token = $.getQueryString('token');
        var opid = $.getQueryString('opid');
        var channel = $.getQueryString('channel');
        $.cookie('token',token);
        $.cookie('opid',opid);
        $.cookie('channel',channel);

        document.getElementById('load').style.display='block';
        browserHistory.push('/msg')
    },
    render:function(){
        var _this = this;
        if(this.state.isbanner){
            var resp =  <Slider imgurl={_this.state.banner.imgurl} url={_this.state.banner.url}/>,
                text = _this.state.banner.text;
        }
        return (
            <div className="index">
                {resp}
                <div className="describe">
                    <p> “融助保”是一款专门为车主分期购买车险而诞生的平台，隶属于且信（上海）互联网金融信息服务有限公司，注册资金3000万元。</p>
                    <p>公司以车险分期为切入点，整合线上线下资源，打造车主金融圈。目前已接入多家财险公司，立志于成为国内最大的车险分期平台。</p>
                    <p>“融助保”车险分期平台，全场<span style={{color:'#FE3824'}}>0首付、0利息、0手续费！期限多样化</span>（任选 <span style={{color:'#FE3824'}}>3期、6期、9期</span>分期缴费，让您的资金更灵活，快来“融助保”分期吧！！</p>
                </div>

                <Link to="/msg" className="abtn"
                      onTouchStart={this.moveColor}
                      onTouchEnd={this.leaveColor}
                >
                    立即报价
                </Link>
                <Load />
            </div>
        )
    }
})
module.exports = Index;