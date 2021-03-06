/**
 * Created by gongchuangshidai on 16/10/29.
 */
var React = require('react');
var allWay = require('../item/publicFun');
var {Router,Route,Link,browserHistory} = require('react-router');
var $ =new allWay();

var Prolist = React.createClass({
    getInitialState:function(){
        return {
            ischecked:false,
            arr:[],
        }
    },
    componentDidMount:function(){
        var tTop = document.getElementById('tTop'),
            prolist = document.getElementById('prolist');


        var A = document.getElementsByClassName('A')[0];
        var B = document.getElementsByClassName('B')[0];

        A.children[1].style.color='#5A7CDD';
        A.setAttribute('data',1);
        A.setAttribute('name',1);
        B.children[1].style.color='#5A7CDD';
        B.setAttribute('data',1);
        B.setAttribute('name',1);

    },
    clickCheck:function(event){
        var target = event.currentTarget;
        var check = target.children[1],
            id=target.className;



        if(target.getAttribute('data') == '0'){
            check.style.color = '#5A7CDD';
            target.setAttribute('data',1)
        }else{
            check.style.color = '#eaeaea';
            target.setAttribute('data',0)
        }

    },
    clickChecked:function(){
        var sej=[],spj=[];
        var eve = document.getElementsByClassName('eve-li')[0];

        for(var i=0,len=eve.children.length;i<len;i++){
            if(eve.children[i].getAttribute('data') == 1){
                if(eve.children[i].className != 'X1'){
                    if(eve.children[i].className == 'D3_D4'){
                        sej.push('D3','D4');
                    }else{
                        sej.push(eve.children[i].className)
                    }
                }
            }
            if(eve.children[i].getAttribute('data') == 0) {
                if (eve.children[i].className != 'X1') {
                    if (eve.children[i].className == 'D3_D4') {
                        spj.push('D3', 'D4');
                    } else {
                        spj.push(eve.children[i].className)
                    }
                }
            }

        }
        for(var j=0,l=sej.length;j<l;j++){
            $.id(sej[j]).setAttribute('name',1);

        }
        for(var p=0,leng=spj.length;p<leng;p++){
            $.id(spj[p]).setAttribute('name',0);

        }

        var prolist = document.getElementById('prolist');
        prolist.style.left= -100+'%';
    },
    moveColor:function(event){
        var tar = event.currentTarget;
        tar.style.backgroundColor='#5576d4';
    },
    leaveColor:function(event){
        this.clickChecked();
        var tar = event.currentTarget;
        tar.style.backgroundColor='#5A7CDD';
    },
    render:function(){
        var list = this.props.datajson.checkbox.map(function(item){
            return (
                <li onClick={this.clickCheck} data="0" className={item.value} >
                    <span className="pull-left">{item.tit}</span>
                    <i className="iconfont pull-right">
                        &#xe600;
                    </i>
                </li>
            )
        },this)
        return (
            <div className="prolist" id="prolist" ref="prolist">
                <Link className="goback" id="tTop"
                      onTouchStart={this.moveColor}
                      onTouchEnd={this.leaveColor}
                >
                    <i className="iconfont pull-left">
                        &#xe601;
                    </i>
                    投保方案
                </Link>
                <ul className="eve-li">
                    {list}
                </ul>
                <Link className="abtn zIn" onClick={this.clickChecked}>确定</Link>
            </div>
        )
    }
})
module.exports = Prolist;