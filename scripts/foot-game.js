$(document).ready(function(){
  //var kickSound = new Audio("ball-kick-sound.wav");

  $(".foot-container .ball").click(function(){
    $(".foot-container .ball").toggleClass("ball-shoot");
    setTimeout(function(){
      $(".win").addClass("win-appear");
      $(".win div").addClass("shake-win");
    },2000);

    setTimeout(function(){
      $(".foot-container .ball").removeClass(".foot-container ball-shoot");
      $(".win").css("transition","0.3s").css("opacity","0").css("visibility","hidden");
      $(".win div").removeClass("shake-win");
    },4000);
    setTimeout(function(){
      $(".win").removeClass("win-appear");
      $(".win").attr("style","");
    },4500);
  });

  $(".basket-container .ball").click(function(){
    $(".basket-container .ball").toggleClass("ball-shoot-basket");

    setTimeout(function(){
      $(".win").addClass("win-appear");
      $(".win div").addClass("shake-win");
    },2000);

    setTimeout(function(){
      $(".basket-container .ball").removeClass("ball-shoot-basket");
      $(".win").css("transition","0.3s").css("opacity","0").css("visibility","hidden");
      $(".win div").removeClass("shake-win");
    },4000);
    setTimeout(function(){
      $(".win").removeClass("win-appear");
      $(".win").attr("style","");
    },4500);
  });
});
