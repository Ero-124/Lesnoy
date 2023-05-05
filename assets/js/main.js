if (window.innerWidth < 1024.99) {

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
  const contacts = document.querySelector('.header__contacts');
  const headerBasket = document.querySelector('.header__basket');


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
    contacts.classList.toggle('active')
    headerBasket.classList.toggle('active')
    toggleLockBody();
  });
}


/* Input visible or hidden */
const searchIcon = document.getElementById('search-icon');
const headerSearch = document.querySelector('#header .header__search');
const headerSearchInput = document.querySelector('#header .header__search input');

let focusTimeoutId;

searchIcon.addEventListener('click', function () {
  headerSearch.classList.add('visible');
  clearTimeout(focusTimeoutId);
  focusTimeoutId = setTimeout(() => headerSearchInput.focus(), 500);
});

document.addEventListener('click', function (event) {
  if (!headerSearch.contains(event.target)) {
    headerSearch.classList.remove('visible');
    headerSearchInput.value = ''
  }
});



function updateInputValue(buttonClicked, operation) {
  const input = buttonClicked.parentElement.children[1];
  let inputValue = input.value;
  const newValue = operation === 'increment' ? parseInt(inputValue) + 1 : parseInt(inputValue) - 1;
  if (newValue >= 1) {
    input.value = newValue;
  }
}

const incrementButton = document.querySelectorAll('.inc');
const decrementButton = document.querySelectorAll('.dec');

incrementButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonClicked = event.target;
    updateInputValue(buttonClicked, 'increment');
  });
});

decrementButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonClicked = event.target;
    updateInputValue(buttonClicked, 'decrement');
  });
});


/* Adding menu items */
let menuItemsAdded = false;

function addMenuItems() {
  if (menuItemsAdded) {
    return;
  }

  /* Header Items */

  const navbarList = document.querySelector('#navbar .navbar__list');
  const createLiElement = document.createElement('li');
  const createLiElement2 = document.createElement('li');
  const createLiElement3 = document.createElement('li');
  createLiElement.classList.add('navbar__item--mobile');
  createLiElement2.classList.add('navbar__item--mobile');
  createLiElement3.classList.add('navbar__item--mobile');

  const createAElement = document.createElement('a');
  createAElement.setAttribute('href', "about-us.html")
  const createAElement2 = document.createElement('a');
  createAElement2.setAttribute('href', "blog.html")
  const createAElement3 = document.createElement('a');
  createAElement3.setAttribute('href', "order.html")
  createAElement.textContent = 'О компании';
  createAElement2.textContent = 'Блог';
  createAElement3.textContent = 'Доставка и услуги';
  createAElement.classList.add('navbar__link');
  createAElement2.classList.add('navbar__link');
  createAElement3.classList.add('navbar__link');

  createLiElement.insertAdjacentElement('afterbegin', createAElement);
  createLiElement2.insertAdjacentElement('afterbegin', createAElement2);
  createLiElement3.insertAdjacentElement('afterbegin', createAElement3);
  navbarList.insertAdjacentElement('afterbegin', createLiElement);
  createLiElement.insertAdjacentElement('afterend', createLiElement2);
  createLiElement2.insertAdjacentElement('afterend', createLiElement3);

  menuItemsAdded = true;
}

function removeMenuItems() {
  const navbarList = document.querySelector('#navbar .navbar__list');
  const navbarItems = navbarList.querySelectorAll('.navbar__item--mobile');
  navbarItems.forEach(item => item.remove());
}

function handleResize() {
  const headerNav = document.querySelector('.header__nav');
  if (window.innerWidth <= 1024.99) {
    addMenuItems();
    menuItemsAdded = true;
    removeHeaderNav(true);
  } else {
    removeMenuItems();
    menuItemsAdded = false;
    if (!headerNav) {
      removeHeaderNav(false);
    }
  }
}

function removeHeaderNav(isDelete) {
  const headerLogo = document.querySelector('.header__logo');
  const headerNav = document.querySelector('.header__nav');
  let headerNavCopy;

  if (isDelete && headerNav) {
    headerNav.remove();
  } else if (!isDelete && !headerNavCopy && headerNav) {
    headerNavCopy = headerNav.cloneNode(true);
    headerLogo.insertAdjacentElement('afterend', headerNavCopy);
  } else if (!isDelete && headerNavCopy) {
    headerLogo.insertAdjacentElement('afterend', headerNavCopy);
  }
}

window.addEventListener('resize', handleResize);
handleResize();


/* function showModal() {
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
} */




/* var prevScrollpos = window.pageYOffset;
var navbars = document.querySelector("#navbar");


window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && window.innerWidth >= 1024 && currentScrollPos > 100 ) {
    navbars.classList.add("show");
  } else {
    navbars.classList.remove("show");
  }
  prevScrollpos = currentScrollPos;
} */


const icons = document.querySelectorAll('.products-catalog__item .item__info i');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.add('bounce');
    setTimeout(function () {
      icon.classList.remove('bounce');
    }, 1000);
  })
})





if (window.innerWidth < 1024.99) {
  const headerContacts = document.querySelector('.header__contacts');
  headerContacts.remove();
  // Создаем элементы
  const createNavbarContacts = document.createElement('div');
  const contactsWrapper = document.createElement('div');
  const phoneLink = document.createElement('a');
  const address = document.createElement('address');

  // Устанавливаем содержимое и атрибуты элементов
  phoneLink.textContent = '+7 495 774-72-85';
  phoneLink.href = 'tel:+74957747285';
  address.textContent = 'г.Москва, ул. Адмирала Корнилова, вл7';

  // Добавляем элементы в DOM
  contactsWrapper.appendChild(phoneLink);
  contactsWrapper.appendChild(address);
  createNavbarContacts.appendChild(contactsWrapper);

  // Добавляем классы для элементов
  createNavbarContacts.classList.add('navbar__contacts');
  contactsWrapper.classList.add('contacts__wrapper');

  // Добавляем headerContacts в нужное место на странице
  document.querySelector('.navbar__list').appendChild(createNavbarContacts);
}

