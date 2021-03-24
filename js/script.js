$(document).ready(function (){

    $('a.bars').click(function (e) {

        e.preventDefault();
        $('.nav-link-mobile').toggleClass('active');

    });
    $('.nav-link ul.nav-area li:nth-child(1)').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */


        $('html, body').animate({	scrollTop: $('.banner').offset().top},1400,"easeOutCubic");
    });
    $('.arrow img').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */


        $('html, body').animate({	scrollTop: $('.hero').offset().top},1400,"easeOutCubic");
    });
    $('.nav-link ul.nav-area li:nth-child(2)').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */


        $('html, body').animate({	scrollTop: $('.hero').offset().top},1000,"easeInOutExpo");
    });
    $('.nav-link ul.nav-area li:nth-child(4)').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */


        $('html, body').animate({	scrollTop: $('.news').offset().top},1000,"easeInOutExpo");
    });
})

