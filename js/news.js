// $(function () {
    // var onPagechange = function(page){
    //     console.log('当前点击页码',page);
    // }
    //
    // var obj = {
    //     wrapid:'wrap-page', //页面显示分页器容器id
    //     total:100,//总条数
    //     pagesize:4,//每页显示10条
    //     currentPage:1,//当前页
    //     onPagechange:onPagechange,
    //     btnCount:5 //页数过多时，显示省略号的边界页码按钮数量，可省略，且值是大于5的奇数
    // }
    // pagination.init(obj);
// })



$(document).ready(function(){
    //每页显示的数目
    var show_per_page = 3;

    //获取content对象里面，数据的数量
    var number_of_items = $('.news-left').children().length;
    console.log(number_of_items)

    //计算页面显示的数量
    var number_of_pages = Math.ceil(number_of_items/show_per_page);

    //隐藏域默认值
    $('#current_page').val(0);

    $('#show_per_page').val(show_per_page);

    var navigation_html = '<a class="previous_link" href="javascript:previous();">上一页</a>';

    var current_link = 0;

    while(number_of_pages > current_link){

        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';

        current_link++;

    }

    navigation_html += '<a class="next_link" href="javascript:next();">下一页</a>';

    $('#page_navigation').html(navigation_html);

    $('#page_navigation .page_link:first').addClass('active_page');

    //隐藏该对象下面的所有子元素

    $('.news-left').children().css('display', 'none');

    //显示第n（show_per_page）元素

    $('.news-left').children().slice(0, show_per_page).css('display', 'block');

});



//上一页

function previous(){
    new_page = parseInt($('#current_page').val()) - 1;

    if($('.active_page').prev('.page_link').length==true){
        go_to_page(new_page);
    }

}

//下一页

function next(){
    new_page = parseInt($('#current_page').val()) + 1;

    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }

}

//跳转某一页

function go_to_page(page_num){

    var show_per_page = parseInt($('#show_per_page').val());
    start_from = page_num * show_per_page;

    end_on = start_from + show_per_page;

    $('.news-left').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');

    $('#current_page').val(page_num);

}
