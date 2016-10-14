/**
 * Created by gongchuangshidai on 16/10/14.
 */
var React = require('react');


var PhotoSlider = React.createClass({
    render:function(){
        return (
            <div className="theHost">
                <div className="header">
                    <div className="hostbanner">
                        <div className="imgWrap">
                            <img src="img/wow.jpg" alt="一言不合拔屌相向"/>
                        </div>
                    </div>
                    <div className="listwrap" id="listwrap">
                        <ul className="clearfix" id="list" >
                            <li className="pull-left">
                    <pre className="iconfont">

                    </pre>
                                <h4>至尊大主宰</h4>
                            </li>
                            <li className="pull-left">
                    <pre className="iconfont">
                        <img src="" alt=""/>
                    </pre>
                                <h4>至尊大主宰</h4>
                            </li>
                            <li className="pull-left">
                    <pre className="iconfont">
                        <img src="" alt=""/>
                    </pre>
                                <h4>至尊大主宰</h4>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="photoImg">
                    <h4>福利区</h4>
                    <ul>
                        <li>
                            <figure>
                                <img src="img/wow.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/wow.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/wow.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/01.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/01.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <figure>
                                <img src="img/wow.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/01.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/02.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src="img/wow.jpg" alt="一群大波妹"/>
                                    <figcaption>
                                        大波浪的长头发
                                    </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
                <div id="photoWrap">
                    <div id='mySwipe' style='max-width:500px;margin:0 auto' className='swipe'>
                        <div className='swipe-wrap'>
                            <div>
                                <img src="img/wow.jpg" alt=""/>
                                    <ul className="textDesgin">
                                        <li>这边是一个标题</li>
                                        <li>楸树逢双一把抓,潜力因缘断不了.分分分,分你个大头鬼</li>
                                    </ul>

                            </div>
                            <div>
                                <img src="img/01.jpg" alt=""/>
                                    <ul className="textDesgin">
                                        <li>这边是一个标题</li>
                                        <li>楸树逢双一把抓,潜力因缘断不了.分分分,分你个大头鬼</li>
                                    </ul>
                            </div>
                            <div>
                                <img src="img/02.jpg" alt=""/>
                                    <ul className="textDesgin">
                                        <li>这边是一个标题</li>
                                        <li>楸树逢双一把抓,潜力因缘断不了.分分分,分你个大头鬼</li>
                                    </ul>
                            </div>

                            <div>
                                <img src="img/01.jpg" alt=""/>
                                    <ul className="textDesgin">
                                        <li>这边是一个标题</li>
                                        <li>楸树逢双一把抓,潜力因缘断不了.分分分,分你个大头鬼</li>
                                    </ul>
                            </div>
                            <div>
                                <img src="img/01.jpg" alt=""/>
                                    <ul className="textDesgin">
                                        <li>这边是一个标题</li>
                                        <li>楸树逢双一把抓,潜力因缘断不了.分分分,分你个大头鬼</li>
                                    </ul>
                            </div>
                            <div>
                                <img src="img/02.jpg" alt=""/>
                                    <ul className="textDesgin">
                                        <li>这边是一个标题</li>
                                        <li>楸树逢双一把抓,潜力因缘断不了.分分分,分你个大头鬼</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
})