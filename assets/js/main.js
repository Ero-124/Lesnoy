/* Dropdown navigation */
const dropdowns = document.querySelector('.navbar__list');

dropdowns.addEventListener('click', (event) => {
  const target = event.target;
  const dropdown = target.closest('.dropdown');

  if (dropdown) {
    const dropdownList = dropdown.querySelector(".dropdown__list");

    if (target.classList.contains("dropdown") || target.tagName === "I") {
      dropdownList.classList.toggle("active");
      dropdown.classList.toggle('active');
    }

    if (window.innerWidth <= 1024 && dropdownList.classList.contains('active')) {
      dropdown.style.marginBottom = dropdownList.clientHeight + 'px';
    } else {
      dropdown.style.marginBottom = 0;
    }
  }
});

/* Dropdown close and burger menu */
const burger = document.querySelector(".header__burger");
const navbar = document.querySelector('.navbar__list');

document.addEventListener('click', (event) => {
  const target = event.target;

  // Close dropdowns
  const dropdownLists = document.querySelectorAll('.dropdown__list');
  dropdownLists.forEach((dropdownList) => {
    const dropdown = dropdownList.closest('.dropdown');
    if (dropdown && !dropdown.contains(target)) {
      dropdownList.classList.remove('active');
      dropdown.classList.remove('active');
      dropdown.style.marginBottom = 0;
    }
  });

  // Close burger menu
  if (!target.closest('.header__burger') && !target.closest('.navbar__list') && navbar.classList.contains('active')) {
    burger.classList.remove('active');
    navbar.classList.remove('active');
    document.body.classList.remove('lock');
  }
});

/* Toggle lock class on body */
function toggleLockBody() {
  document.body.classList.toggle('lock');
}

// Burger menu click event
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
  toggleLockBody();
});


/* Input visible or hidden */
const searchIcon = document.getElementById('search-icon');
const searchInput = document.querySelector('#header .header__search input');

searchIcon.addEventListener('click', function () {
  searchInput.classList.add('visible');
});



/* Adding menu items */
/* <li><a href="">О компании</a></li> */

// function addFooterItems() {
//   /* Footer Items */
//   const footerLeft = document.querySelector('#footer .footer__left ');
//   const createDivElement = document.createElement('div')
//   createDivElement.classList.add('navigation')

//   const createAElement = document.createElement('a');
//   const createAElement2 = document.createElement('a');

//   createAElement.textContent = 'О компании';
//   createAElement2.textContent = 'Доставка и услуги';

//   createDivElement.insertAdjacentElement("afterbegin", createAElement2)
//   createDivElement.insertAdjacentElement('afterbegin', createAElement)

//   footerLeft.insertAdjacentElement("beforeend", createDivElement)


// }

// addFooterItems();



let menuItemsAdded = false;

function addMenuItems() {
  if (menuItemsAdded) {
    return;
  }

  /* Header Items */

  const navbarList = document.querySelector('#navbar .navbar__list');
  const createLiElement = document.createElement('li');
  const createLiElement2 = document.createElement('li');
  createLiElement.classList.add('navbar__item--mobile');
  createLiElement2.classList.add('navbar__item--mobile');

  const createAElement = document.createElement('a');
  createAElement.setAttribute('href', "#")
  const createAElement2 = document.createElement('a');
  createAElement2.setAttribute('href', "#")
  createAElement.textContent = 'О компании';
  createAElement2.textContent = 'Доставка и услуги';
  createAElement.classList.add('navbar__link');
  createAElement2.classList.add('navbar__link');

  createLiElement.insertAdjacentElement('afterbegin', createAElement);
  createLiElement2.insertAdjacentElement('afterbegin', createAElement2);
  navbarList.insertAdjacentElement('afterbegin', createLiElement);
  createLiElement.insertAdjacentElement('afterend', createLiElement2);

  menuItemsAdded = true;
}

function removeMenuItems() {
  const navbarList = document.querySelector('#navbar .navbar__list');
  const navbarItems = navbarList.querySelectorAll('.navbar__item--mobile');
  navbarItems.forEach(item => item.remove());
}


function handleResize() {
  if (window.innerWidth <= 1024.99) {
    addMenuItems();
    menuItemsAdded = true;
    // removeHeaderNav(true);
  } else {
    removeMenuItems();
    menuItemsAdded = false;
    // removeHeaderNav(false);
  }
}

/* function removeHeaderNav(isDelete) {
  const headerLogo = document.querySelector('.header__logo');
  const headerNav = document.querySelector('.header__nav');
  let headerNavCopy;
  if (isDelete) {
    headerNav.remove();
  } else {
    headerNavCopy = headerNav;
    headerLogo.insertAdjacentElement("afterend", headerNavCopy);
  }
} */

window.addEventListener('resize', handleResize);
handleResize();



const open = document.getElementById("open-modal");
const modal__container = document.getElementById("basket-modal__container");
const modal = document.getElementById("basket-modal");
const close = document.getElementById("close");
const body = document.querySelector('body');

open.addEventListener('click', function () {
  modal__container.classList.add('show');
  modal.classList.add('show');
  body.classList.add('lock');
})

document.addEventListener('click', (e) => {
  if (e.target === modal__container || e.target === close) {
    modal__container.classList.remove('show');
    modal__container.classList.remove('show');
    modal.classList.remove('show');
    body.classList.remove('lock');
  }
});