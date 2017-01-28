$('.industry-slider').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        900:{
            items:4
        }
    }
});

$('.company-slider').owlCarousel({
    loop:true,
    margin:60,
    navText: [],
    nav: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        400: {
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5,
            loop:false
        }
    }
});

$('.project-slider').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    items:1
})