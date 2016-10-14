/**
 * Created by gongchuangshidai on 16/10/11.
 */


function movewrap(id,id2,font,awidth){
    var listwrap = document.getElementById(id),
        list = document.getElementById(id2);
    var sx,ex,mx,startX,moveX;

    var sW = window.screen.availWidth;
    var doubal = sW/320;
    list.style.width =awidth*(list.children.length) +'rem';
    var set = parseFloat(list.style.width);
    var off =parseFloat(listwrap.offsetWidth/20) /doubal;
    if(set<off){
        return
    }
    function load(){
        list.addEventListener('touchstart',touch,false);
        list.addEventListener('touchmove',touch,false);
        list.addEventListener('touchend',touch,false);
    }
    function touch(event){
        var event = event || window.event;

        if(event.type == 'touchstart'){
            sx = event.touches[0].clientX/font;
            startX = parseInt(list.style.left);
        }
        if(event.type == 'touchend'){
            startX = parseFloat(list.style.left);
            moveX = parseFloat(list.style.left)
            if(moveX>0){
                list.style.left = 0
            }else if(moveX<  -(set-off)){
                list.style.left = -(set-off) +'rem'
            }
        }
        if(event.type == 'touchmove'){

            mx = event.changedTouches[0].clientX/font;
            list.style.left = mx-sx+startX+'rem'
        }
    }
    window.addEventListener('load',load)
}
//父元素id  子盒子id2
//list.子元素 都必须有宽度
module.exports = movewrap