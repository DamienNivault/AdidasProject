$(document).ready(function(){

  $(".right").click(function(){
    $(".left").addClass("fade-left");
    $(".right").addClass("fade-right");

    $(".foot-container").
    css("transition","0.5s").
    css("display","block").
    css("opacity","0.2");

    setTimeout(function(){
      $(".foot-container").
      css("transition","1s").
      css("transform","scale(1)").
      css("opacity","1");
    },1000);
  });

  $(".left").click(function(){
    $(".left").addClass("fade-left");
    $(".right").addClass("fade-right");

    $(".basket-container").
    css("transition","0.5s").
    css("display","block").
    css("opacity","0.2");

    setTimeout(function(){
      $(".basket-container").
      css("transition","1s").
      css("transform","scale(1)").
      css("opacity","1");
    },1000);
  });
});
