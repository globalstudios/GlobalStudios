$(function() {

  var $navBtn = $("#drawer_button");
  var $navWrap = $(".site-header");
  var $navBody = $("#drawer_wrap .global-nav");
  var bodySpeed = 100;
  var wrapSpeed = 400;

  $navBtn.click(function() {
    $(this).toggleClass("active");

    if($(this).hasClass("active")) {
      $navBody.animate({"top": "36"}, bodySpeed);
      $navWrap.animate({
        "height": "100%",
        "opacity": ".8"
      }, wrapSpeed);
    }
    else {
      $navBody.animate({"top": "-600"}, bodySpeed);
      $navWrap.animate({
        "height": "36px",
        "opacity": "1"
      }, wrapSpeed);
    }
  });

});
