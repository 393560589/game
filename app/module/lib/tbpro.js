/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,History} = require('react-router');


var url = require('../item/item.js');
var reqwest = require('reqwest');
var Back = require('./goback');


var data =[
    {
        value:'110100',
        city:'北京'
    },
    {
        value:'120100',
        city:'天津'
    },
    {
        value:'310100',
        city:'上海'
    },
    {
        value:'500100',
        city:'重庆'
    },
    {
        value:'130000',
        city:'河北'
    },
    {
        value:'140000',
        city:'山西'
    },
    {
        value:'150000',
        city:'内蒙古'
    },
    {
        value:'210000',
        city:'辽宁'
    },
    {
        value:'220000',
        city:'吉林'
    },
    {
        value:'230000',
        city:'黑龙江'
    },
    {
        value:'320000',
        city:'江苏'
    },
    {
        value:'330000',
        city:'浙江'
    },
    {
        value:'340000',
        city:'安徽'
    },
    {
        value:'350000',
        city:'福建'
    },
    {
        value:'360000',
        city:'江西'
    },
    {
        value:'370000',
        city:'山东'
    },
    {
        value:'410000',
        city:'河南'
    },
    {
        value:'420000',
        city:'湖北'
    },
    {
        value:'430000',
        city:'湖南'
    },
    {
        value:'440000',
        city:'广东'
    },
    {
        value:'450000',
        city:'广西'
    },
    {
        value:'460000',
        city:'海南'
    },
    {
        value:'510000',
        city:'四川'
    },
    {
        value:'520000',
        city:'贵州'
    },
    {
        value:'530000',
        city:'云南'
    },
    {
        value:'540000',
        city:'西藏'
    },
    {
        value:'610000',
        city:'陕西'
    },
    {
        value:'620000',
        city:'甘肃'
    },
    {
        value:'630000',
        city:'青海'
    },
    {
        value:'640000',
        city:'宁夏'
    },
    {
        value:'650000',
        city:'新疆'
    },

];

var Tbpro = React.createClass({
    getInitialState:function(){
        return {
            isCity:false,
            citys:null,
            icon:0,
            cityName:null
        }
    },
    componentDidMount:function(){
        var tTop = document.getElementById('tTop'),
        proWrap = document.getElementById('proWrap'),
         h =  -proWrap.offsetHeight+'px',
            sure = document.getElementById('sure');

        proWrap.style.bottom = h;

        tTop.onclick = function(){
            close()
        }
        sure.onclick = function(){
            var cityval = document.getElementById('cityval');
            var cityClass,cName;
            cityClass = document.getElementById('checked');
            if(cityClass!=null){
                cName=cityClass.parentNode.childNodes[0].innerHTML;
                console.log(cName)
            }else{
                alert('请选择城市')
            }

            if(cName != undefined){
                cityval.innerHTML = cName
                close()
            }

        }

        function close(){
            tTop.style.position='relative';
            proWrap.style.bottom = h;
            sure.style.display = 'none'
        }

    },
    proClick:function(event){
        var pro = event.target;
        var ph = pro.parentNode.style.height;
        var city = pro.parentNode.getAttribute('value');
        var _this = this;
        var allpro = document.getElementById('allpro').children;

        for(var i=0,len=allpro.length;i<len;i++){
            allpro[i].style.height = 2.2+'rem';
            allpro[i].childNodes[1].innerHTML = '<pre class="iconfont">&#xe603;</pre>'
        }

        if(ph == 'auto'){
            pro.parentNode.style.height = 2.2+'rem';
            pro.parentNode.childNodes[1].innerHTML = '<pre class="iconfont">&#xe603;</pre>'
        }else{
            pro.parentNode.childNodes[1].innerHTML = '<pre class="iconfont">&#xe604;</pre>'
            reqwest({
                url:url+'V1/city',
                method:'get',
                data:{
                    city_name:city
                },
                success:function(xrh){
                    console.log(xrh.list.menu)
                    if(_this.isMounted()){
                        _this.setState({
                            isCity:true,
                            citys:xrh.list.menu
                        })
                    }
                }
            })
            pro.parentNode.style.height ='auto';
        }
    },
    checkCity:function(event){
        var ch = event.target;
        var sure = React.findDOMNode(this.refs.sure);
        var gou = document.getElementsByClassName('gou');

        for(var i=0,len = gou.length;i<len;i++){
            gou[i].innerHTML = '';
            gou[i].id = ''
        }

        ch.childNodes[1].innerHTML = '<pre class="iconfont check">&#xe600;</pre>';
        ch.childNodes[1].id = 'checked';

    },
    render:function(){
        var _this = this;
        if(this.state.isCity){
           var allcity =  _this.state.citys.map(function(item){
                    return (
                        <dd onClick={_this.checkCity}>
                            {item.comname}
                            <i className="pull-right gou">

                            </i>
                        </dd>
                    )
            },_this)
        }
        return (
            <div className="proWrap" id="proWrap">
                <div className="tb-carlist" id="prolist" ref='prolist'>
                    <Back tit="投保城市" id='tTop'/>

                    <h4 className="se-tit" style={{marginTop:'2rem'}}>
                        现已开通投保城市及地区如下：
                    </h4>

                    <ul className="tb-allpro" id="allpro">
                        {
                            data.map(function(item){
                                return (
                                    <li className="clearfix tb-pro" id="pro" ref="pro" value={item.city} >
                                        <h4 onClick={this.proClick}>{item.city}</h4>
                                        <i className="pull-right" ref="more" id="more">
                                            <pre className="iconfont">&#xe603;</pre>
                                        </i>
                                        <dl>
                                            {allcity}
                                        </dl>
                                    </li>
                                )
                            },this)
                        }
                    </ul>

                </div>
                <a className="abtn" ref="sure" id="sure">
                     确定
                </a>
            </div>

        )
   }
})
module.exports = Tbpro;