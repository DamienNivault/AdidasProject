$(document).ready(function(){

  $(".right").click(function(){
    $(".left").removeClass('return');
    $(".right").removeClass('return');

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
    $(".left").removeClass('return');
    $(".right").removeClass('return');

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

  $(".arrow").click(function() {
    $(".foot-container, .basket-container").
    css("transition","0.5s").
    css("opacity","0");

    setTimeout(function(){
      $(".foot-container, .basket-container").
      css("transition","1s").
      css("transform","scale(0)").
      css("opacity","0");
    },1000);

    setTimeout(function (){
      $(".left").addClass('return');
      $(".right").addClass('return');

      $(".foot-container, .basket-container").css("display","none");
    }, 500);
  });
});
