$(function () {
    //手风琴
    $("#cardArea").cardArea()

    //关于我们
    $("#timeLine").timeLine({
        w: 900
    });

    //解决方案部分
    $('.solu').mouseenter(function () {
        $(this).children('.sol-first').hide().siblings().show()
    }).mouseleave(function () {
        $(this).children('.sol-second').hide().siblings().show()
    })

    //核心技术
    $('.core .core-content').mouseenter(function () {
        $(this).children('.core-cont').hide().siblings().show()
    }).mouseleave(function () {
        $(this).children('.core-cont-hover').hide().siblings().show()
    })

    //首页banner内容
    var width = $('.move').width()
    var height = $('.move').height()

    moveTo(width,height)

    window.onresize=function () {
        var width = $('.move').width();
        var height = $('.move').height()
        moveTo(width, height)
    }


})


var moveTo = function (width,height) {
    var timm = 0;
    var n = 0
    timm = setInterval(function () {
        var arr  = ["12px","15px","20px","25px","30px","35px","30px","25px","20px","15px","12px"];
        var fontOpacity = ['.3','.5','.6','.7','.8','1','.8','.7','.6','.5','.3']
        var arr1  = ["32px","28px","25px","20px","15px","12px","15px","20x","25px","28px",'32px'];
        var fontOpacity1 = ['1','.8','.6','.5','.4','.3','.4','.5','.6','.8','1']
        var arr2  = ["14px","16px","22px","26px","30px","26px","22px","18px","16x","14px"];
        var fontOpacity2 = ['.3','.4','.6','.8','1','.8','.7','.5','.4','.3']
        var arr3  = ["30px","27px","24px","21px","18px",'15px','12px','15px','18px','21px','24px','27px','30px'];
        var fontOpacity3 = ['1','.8','.7','.6','.5','.4','.3','.4','.5','.6','.7','.8','1']
        var random1 = (Math.random()*width) + 'px';
        var random3 = (Math.random()*width) + 'px';
        var random5 = (Math.random()*width) + 'px';
        var random2 = (Math.random()*height) + 'px';
        var random4 = (Math.random()*height) + 'px';
        var random6 = (Math.random()*height) + 'px';
        $('.one').animate({
            'top':random2 ,
            'left':random1,
            'fontSize':arr[n%arr.length],
            'opacity':fontOpacity[n%fontOpacity.length]
        },5000)
        $('.one1').animate({
            'top':random4,
            'left':random3,
            'fontSize':arr3[n%arr.length],
            'opacity':fontOpacity3[n%fontOpacity3.length]
        },6000)
        $('.one2').animate({
            'top':random2,
            'left':random2,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },4500)
        $('.one3').animate({
            'top':random3,
            'left':random3,
            'fontSize':arr3[n%arr.length]
        },5200)
        $('.two').animate({
            'top':random6,
            'left':random5,
            'fontSize':arr1[n%arr.length],
            'opacity':fontOpacity1[n%fontOpacity1.length]
        },5700)
        $('.two1').animate({
            'top':random4 ,
            'left':random1,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },6000)
        $('.two2').animate({
            'top':random6,
            'left':random1,
            'fontSize':arr1[n%arr.length],
            'opacity':fontOpacity1[n%fontOpacity1.length]
        },4800)
        $('.two3').animate({
            'top':random4,
            'left':random5,
            'fontSize':arr3[n%arr.length],
            'opacity':fontOpacity3[n%fontOpacity3.length]
        },5400)
        $('.three').animate({
            'top':random2 ,
            'left':random5,
            'fontSize':arr[n%arr.length],
            'opacity':fontOpacity[n%fontOpacity.length]
        },5500)
        $('.three1').animate({
            'top':random4 ,
            'left':random5,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },4600)
        $('.three3').animate({
            'top':random6 ,
            'left':random1,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },4200)
        $('.three2').animate({
            'top':random2 ,
            'left':random6,
            'fontSize':arr3[n%arr.length],
            'opacity':fontOpacity3[n%fontOpacity3.length]
        },5700)
        $('.four').animate({
            'top':random2 ,
            'left':random3,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },5300)
        $('.four2').animate({
            'top':random1 ,
            'left':random4,
            'fontSize':arr[n%arr.length],
            'opacity':fontOpacity[n%fontOpacity.length]
        },5700)
        n++;
    },1000)
}
