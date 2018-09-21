$(function () {
    //页面滚动出现返回顶部
    $(document).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var top=document.getElementById("backUp");
        if(scrollTop>500){
            top.style.display='block'
            top.onclick=function(){
                timer=setInterval(function(){
                    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                    var ispeed=Math.floor(-scrollTop/6);
                    // console.log(ispeed)
                    if(scrollTop==0){
                        clearInterval(timer);
                    }
                    document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
                },50)
            };
        }else {
            top.style.display='none'
        }
    })


    //底部四个
    $('.foot-contact li').mouseenter(function () {
        $(this).children('img').attr('src',$(this).children('img').attr('src').split('.')[0]+'_hover'+'.png')
    }).mouseleave(function () {
        $(this).children('img').attr('src',$(this).children('img').attr('src').split('_')[0]+'.png')
    })
})
