$(document).ready(function(){
  $(".left, .right").click(function(){
    $(".left").addClass("fade-left");
    $(".right").addClass("fade-right");

    $(".foot-container").
    css("transition","0.5s").
    css("visibility","visible").
    css("opacity","0.2");

    setTimeout(function(){
      $(".foot-container").
      css("transition","1s").
      css("transform","scale(1)").
      css("opacity","1");
    },1000);
  });
});
