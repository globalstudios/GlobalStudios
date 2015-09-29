$(function() {

  if(("ontouchstart" in window))
    $("a, .btn").bind("touchstart touchend", function() { $(this).toggleClass("hover"); });
  else
    $("a, .btn").hover(function() { $(this).toggleClass("hover"); });

});
