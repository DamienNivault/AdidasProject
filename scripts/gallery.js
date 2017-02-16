$(document).ready(function() {

    var winSoccer =  $('#footLoose');
    var looseSoccer = $('#footWin');
    var winBasket = $('#basketLoose');
    var looseBasket = $('#basketWin');



    looseSoccer.click(function(){
        winSoccer.removeClass('hide');
        winSoccer.addClass('slideField');
        looseSoccer.addClass('hide');
        winSoccer.animate({
        }, 200 , function() {
            // Animation complete.
        });


    });
    winSoccer.click(function(){
        looseSoccer.removeClass('hide');
        looseSoccer.addClass('slideField');
        winSoccer.addClass('hide');
        looseSoccer.animate({
        }, 200 , function() {
            // Animation complete.
        });


    });
    looseBasket.click(function(){
        winBasket.removeClass('hide');
        winBasket.addClass('slideField');
        looseBasket.addClass('hide');
        winBasket.animate({
        }, 200 , function() {
            // Animation complete.
        });


    });
    winBasket.click(function(){
        looseBasket.removeClass('hide');
        looseBasket.addClass('slideField');
        winBasket.addClass('hide');
        looseBasket.animate({
        }, 200 , function() {
            // Animation complete.
        });


    });




});