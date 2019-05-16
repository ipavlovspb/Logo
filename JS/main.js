/*------menu---------*/
let menuBtn = $('.menu-section .container nav .menu li a');
$(function () {
    menuBtn.click(function () {
        $(this).toggleClass('blue-btn');
    })
});

/*-------get-lorem-btn----*/
$(function () {
    $('.menu-section > .container > a > .get-lorem-btn').click(function () {
        $(this).css({
            'background-color': '#ffff',
            'border': '1px solid #00aaff',
            'color': '#00aaff',
            'opacity': '0.5'
        });
    })
});
$(function () {
    $('.info-about > .container > a > .get-lorem-btn').click(function () {
        $(this).css({
            'background-color': '#00aaff',
            'border': '1px solid #00aaff',
            'color': '#ffff',
            'opacity': '0.5'
        });
    })
});
$(function () {
    $('.reasons-to-use > .container > a > .learn-more-btn').click(function () {
        $(this).css({
            'background-color': '#00aaff',
            'border': '1px solid #00aaff',
            'color': '#ffff',
            'opacity': '0.5'
        });
    })
});
$(function () {
    $('.circles-graphics > .container > a > .get-the-free-btn').click(function () {
        $(this).css({
            'background-color': '#00aaff',
            'border': '1px solid #00aaff',
            'color': '#ffff',
            'opacity': '0.5'
        });
    })
});


/*--------player-----------*/
$(document).ready(function(){
    var controls = {
        video: $(".video"),
        playpause: $(".play-btn")
    };

    var video = controls.video[0];

    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            //$(this).text("Pause");
        } else {
            video.pause();
            //$(this).text("Play");
        }

        $(this).toggleClass("paused");
    });
});


/*-------mobile-menu-----*/
$(function () {
   $('.burger-menu').click(function () {
       //$('.mobile-menu').toggleClass('show-menu', 1000);
       $('.mobile-menu').fadeToggle();
       $('body').toggleClass('fixed');
   })
});







$(function () {
    $('.menu > .last-one').click(function () {
        $('.hidden-menu').fadeToggle();
    })
})
