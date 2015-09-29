$(function(){

  var nav_offset = $("#fix_bar").offset().top;
  $(window).on("scroll load", function(){
    var now_offset = $(window).scrollTop();
    if(now_offset > nav_offset) {
      $("#fix_bar").css("position", "fixed" );
      $("#fix_wrapper").css("padding-bottom", "48px");
    }
    else {
      $("#fix_bar").css("position", "inherit" );
      $("#fix_wrapper").css("padding-bottom", "0");
    }
  });

});
