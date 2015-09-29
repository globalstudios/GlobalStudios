$(function() {

  $(".drawer-btn, .drawer-wrap a").click(function() {
    var $navBody, $navWrap, $navBtn;
    var bodySpeed = 200;
    var wrapSpeed = 400;
    var isLink = $(this)[0].localName == "a";

    if(isLink) {
      if($(this).parent()[0].localName == "h1")
        $navBody = $(this).parent().next();
      else
        $navBody = $(this).parent().parent().parent();
      $navBtn  = $navBody.next();
    } else {
      $navBody = $(this).prev();
      $navBtn  = $(this);
    }
    $navWrap = $navBody.parent().parent();

    $navBtn.toggleClass("active");

    if($navBtn.hasClass("active") && !isLink) {
      $navBody.animate({"top": "48px"}, bodySpeed);
      $navWrap.animate({
        "height": "100%",
        "opacity": "1"
      }, wrapSpeed);
    }
    else {
      $navBody.animate({"top": "-1000px"}, bodySpeed);
      $navWrap.animate({
        "height": "48px",
        "opacity": ".8"
      }, wrapSpeed);
    }
  });

});
