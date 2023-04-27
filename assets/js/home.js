$(document).ready(function () {

    // TOP Sales-slider 
    $("#top-sales__slider").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1368: {
                items: 4,
            }
        }
    });

})

/* Rotating img */
const itemContainer = document.querySelector('.sort__wrapper');
const rotateImg = document.querySelector('.sort__img');

itemContainer.addEventListener("mouseover", (e) => {
    const rotation = e.target.getAttribute("data-rotation");
    if (rotation) {
        rotateImg.style.transform = `rotate(${rotation}deg)`;
    }
});