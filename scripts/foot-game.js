$(document).ready(function(){
  //var kickSound = new Audio("ball-kick-sound.wav");

  $("#ball").click(function(){
    $("#ball").toggleClass("ball-shoot");
    kickSound.play();

    setTimeout(function(){
      $("#ball").removeClass("ball-shoot");
    },6000);
  });
});
