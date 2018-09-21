$(function () {
    var onPagechange = function(page){
        console.log('当前点击页码',page);
    }
    var obj = {
        wrapid:'wrap-page', //页面显示分页器容器id
        total:100,//总条数
        pagesize:4,//每页显示10条
        currentPage:1,//当前页
        onPagechange:onPagechange,
        btnCount:5 //页数过多时，显示省略号的边界页码按钮数量，可省略，且值是大于5的奇数
    }
    pagination.init(obj);
})
