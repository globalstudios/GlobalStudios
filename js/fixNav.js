$(function(){

  var nav_offset = $(".local-nav").offset().top;
  $(window).on("scroll load", function(){
    var now_offset = $(window).scrollTop();
    if(now_offset > nav_offset) {
      $(".local-nav").css("position", "fixed" );
      $(".local-nav-wrapper").css("padding-bottom", "48px");
    }
    else {
      $(".local-nav").css("position", "inherit" );
      $(".local-nav-wrapper").css("padding-bottom", "0");
    }
  });

});
