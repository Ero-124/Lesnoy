$(document).ready(function () {


    /* Main slider */
    $("#main-slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        nav: false,
        dots: false,
        slideSpeed: 1000,
        items: 1,
        singleItems: true,
        animateOut: 'fadeOut',
        lazyLoad: true,
    });


    // TOP Sales-slider 
    $("#top-sales__slider").owlCarousel({
        loop: true,
        margin: 20,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            360: {
                items: 1,
                margin: 16
            },
            479: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1368: {
                items: 4,
                margin: 20,
            }
        }
    });

})



/* Rotating img */
function addRotationEffect() {
    const itemContainer = document.querySelector('.sort__wrapper');
    const rotateImg = document.querySelector('.sort__img');

    if (window.innerWidth >= 1024) {
        itemContainer.addEventListener("mouseover", (e) => {
            const rotation = e.target.getAttribute("data-rotation");
            if (rotation) {
                rotateImg.style.transform = `rotate(${rotation}deg)`;
            }
        });
    }
}

addRotationEffect();


if (window.innerWidth < 1200) {
    const sortImg = document.querySelector('.sort__img');
    sortImg.remove();
  }


/* function handleWindowResize() {
    const headerNav = document.querySelector('.header__nav');
    const headerContacts = document.querySelector('.header__contacts');
    const headerBasket = document.querySelector('.header__basket');
    const headerLogo = document.querySelector('.header__logo');

    if (window.innerWidth <= 991) {
        if (headerNav) headerNav.remove();
        if (headerContacts) headerContacts.remove();
        if (headerBasket) headerBasket.remove();
    } else {
        if (headerNav && !headerLogo.nextElementSibling.classList.contains('header__nav')) {
            headerLogo.after(headerNav);
        }
    }
}

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', handleWindowResize);

// Вызываем функцию handleWindowResize() при загрузке страницы
handleWindowResize(); */


function closeDiscount() {
    const discount = document.querySelector("#discount");
    const iconX = document.querySelector(".icon-x");

    iconX.addEventListener('click', () => {
        discount.remove();
    })
}

closeDiscount()