$(document).ready(function() {
    
    /* join team */
    $('.join-team-slider').addClass('owl-carousel');
    $('.join-team-slider').owlCarousel({
        loop:true,
        margin:10,
        autoHeight:true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        items:2,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    }) 
    /* join team */
});

