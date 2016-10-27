/**
 * Created by gongchuangshidai on 16/10/10.
 */
var React =require('react');
var {Router,Link,History} = require('react-router');

//
var Slider = require('./lib/slider.js');//slider广告banner






var Index = React.createClass({
    componentDidMount:function () {
        var swiper = new Swiper('.index .swiper-container', {
            pagination: '.index .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
    },
    render:function(){
        return (
            <div className="index">
                <Slider />
                <div className="describe">
                    <p>
                        这个区域是详细的保险分期介绍内容这个区域是详细的保险分期介绍内容这个区域是详细的保险分期介绍内容这个区域是详细的保险分期介绍内容这个区域是详细的保险分期介绍内容这个区域是详细的保险分期介绍内容这个区域是详细的保险分期介绍内容这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                    </p>
                    <p>
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                        这个区域是详细的保险分期介绍内容
                    </p>
                </div>
                <Link to="/msg" className="abtn">
                    立即报价
                </Link>
            </div>
        )
    }
})
module.exports = Index;