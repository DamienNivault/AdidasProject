$(document).ready(function(){
  //var kickSound = new Audio("ball-kick-sound.wav");

  $(".foot-container .ball").click(function(){
    $(".foot-container .ball").toggleClass("ball-shoot");
    kickSound.play();

    setTimeout(function(){
      $(".foot-container .ball").removeClass(".foot-container ball-shoot");
    },6000);
  });

  $(".basket-container .ball").click(function(){
    $(".basket-container .ball").toggleClass("ball-shoot-basket");
    kickSound.play();

    setTimeout(function(){
      $(".basket-container .ball").removeClass(".basket-container ball-shoot-basket");
    },6000);
  });
});
