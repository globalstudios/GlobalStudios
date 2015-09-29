$(function(){

  var $fixBar     = $("#local_nav");
  var $fixWrapper = $("#local_nav .wrap");
  var $fixBottom  = $(".site-main section:first-of-type");
  var nav_offset  = 48;

  $(window).on("scroll load", function(){
    var now_offset = $(window).scrollTop();
    if(now_offset > nav_offset) {
      $fixBar.css("position", "fixed");
      $fixBar.css("top", 0);
      $fixBottom.css("margin-top", nav_offset*2);
    }
    else {
      $fixBar.css("position", "absolute");
      $fixBar.css("top", nav_offset);
      $fixBottom.css("margin-top", nav_offset*2);
    }
  });

});
