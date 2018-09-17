$(document).ready(function () {
    upheader();
   $('.index_card .item').hover(function(){
     $(this).addClass('active').siblings().removeClass('active');
   });
   $('.open_tree dt').click(function(){
     var openTrue = $(this).parent('dl');
     if(openTrue.hasClass('active')){
       openTrue.removeClass('active');
     }else{
       openTrue.addClass('active').siblings('dl').removeClass('active');
     }
   })
   $(".open_tree dd").click(function(){
     $(this).addClass('active').siblings().removeClass('active');
   });
   $('.sdk-head span').click(function(){
     var parents = $(this).parent().parent().parent();
     if(parents.hasClass('active')){
       parents.removeClass('active');
     }else{
       parents.addClass('active').siblings().removeClass('active');
     }
   })
  $(".navbar-toggle").click(function(){
    if($(this).hasClass("drawer-open")){
      $(this).removeClass('drawer-open');
      $(".navbar").slideUp();
    }else{
      $(this).addClass('drawer-open');
      $(".navbar").slideDown();
    }
  })
  $(".navbar li>a").click(function(){
    var w  = $(window).width();
    if(w <= 640){
      $(this).parent().find('dl').slideToggle();
      $(this).parent().siblings('li').find('dl').slideUp();
    }
  })
   $(".msg-btn").click(function(event){
     event.preventDefault();
     var msgName = $("#msgName").val();var msgContact = $("#msgContact").val();var msgCompany = $("#msgCompany").val();
     var msgJob = $("#msgJob").val();var msgEmail = $("#msgEmail").val();var msgPurpose = $("#msgPurpose").val();
     var msgContent = $("#msgContent").val();
     if(msgName == ""){
       dialog('请完善您的姓名，方便我们联系您。');$("#msgName").focus();return false;
     }
     if(msgContact == ""){
       dialog('请完善您的联系方式，方便我们联系您。');$("#msgContact").focus();return false;
     }

     if(msgEmail == ""){
       dialog('请完善您的邮箱，方便我们联系您。');$("#msgEmail").focus();return false;
     }

     if(msgContent == ""){
       dialog('请完善您的留言内容，方便我们联系您。');$("#msgContent").focus();return false;
     }
     $.post('/index/act_message.html', {msgName:msgName,msgContact:msgContact,msgCompany:msgCompany,msgJob:msgJob,msgEmail:msgEmail,msgPurpose:msgPurpose,msgContent:msgContent},function(msg){
      if(msg.code == 1){
        $("#msgName").val('');$("#msgContact").val('');$("#msgCompany").val('');$("#msgJob").val('');$("#msgEmail").val('');$("#msgPurpose").val('');$("#msgContent").val('');
        $(".yz-modal").fadeIn();
      }else{
        alert(msg.message);
      }
   }, 'json').error(function(){
     alert("服务器正忙，请稍后再试！");
   });
   });

   $(".product-lists .item .tomore").click(function(){
     $(this).parent().parent().addClass('active');
     var item = $(this).parent().parent();
     var _offsetLeft = item.offset().left;
     var h = parseInt(_offsetLeft - 380);
     if(h <= 0){
       item.find('.show2>.texts').animate({width:810},800);
     }else if(h >=0 && h <= 500){
       item.find('.show2').animate({left:-410},800);
       item.find('.show2>.texts').animate({width:810},800);
     }else if(h >=500 && h <= 1000){
       item.find('.show2>.texts').width(810);
       item.find('.show2').animate({left:-820},800);
     }
   })
   $(".product-lists .item .show2 em").click(function(){
    var item = $(this).parents('.item');
    var _offsetLeft = item.offset().left;
    var h = parseInt(_offsetLeft - 380);

    if(h <= 0){
      item.find('.show2>.texts').animate({width:0},800,function(){
        item.removeClass('active');
      });
    }else if(h >=0 && h <= 500){
      item.find('.show2').animate({left:0},800);
      item.find('.show2>.texts').animate({width:0},800,function(){
        item.removeClass('active');
      });
    }else if(h >=500 && h <= 1000){
      item.find('.show2>.texts').width(0);
      item.find('.show2').animate({left:0},800,function(){
        item.removeClass('active');
      });
    }
   });
   /*$(".footerContact li").hover(function(){
    var index = $(this).index();
    $(".footerContact p").eq(index).show().siblings('p').hide();
  });*/

  $("#top").click(function() {
   $("html,body").animate({scrollTop:0}, 500);
  });
  $(".dialog-other a").click(function() {
   $(".yz-dialog").fadeOut();
  });
  $(".yz-modal a").click(function() {
   $(".yz-modal").fadeOut();
  });
});
function upheader () {
    var initTop = 0;
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > initTop&&scrollTop!=0){
            $(".header").addClass("fixed")
        } else {
        }
        if (scrollTop == 0) {
           $(".header").removeClass("fixed")
        }
        initTop = scrollTop;
    });
}
function dialog(content=""){
  $('.yz-dialog').fadeIn();$('.dialog-content').html(content);
}
