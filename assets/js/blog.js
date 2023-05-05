if ($(window).width() < 1024.99) {

    $("#blog-slider").owlCarousel({
        loop: true,
        margin: 16,
        autoplay: true,
        autoplayTimeout: 3500,
        nav: false,
        dots: false,
        slideSpeed: 1000,
        items: 1.2,
        singleItems: true,
        animateOut: 'fadeOut',
        lazyLoad: true,
    });
}