$("#product-slider").owlCarousel({
  loop: true,
  /* autoplay: true,
  autoplayTimeout: 4000, */
  nav: false,
  dots: false,
  items: 1,
  singleItems: true,
  smartSpeed: 850
});

$(document).ready(function () {
  $('select').niceSelect();
});


const rangeInput = document.querySelectorAll(".range__input input");
const progress = document.querySelector(".progress__bar .progress");
const price = document.querySelectorAll('.price__field');

let priceGap = 1000;
rangeInput.forEach(input => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      price[0].innerHTML = minVal + "₽";
      price[1].innerHTML = maxVal + "₽"
    }

    progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
  })
})











function initModal(btnSelector, modalContainerSelector, modalSelector, closeBtnId, threshold) {
  const modalBtn = document.querySelector(btnSelector);
  const modalContainer = document.querySelector(modalContainerSelector);
  const modal = document.querySelector(modalSelector);
  const closeBtn = document.getElementById(closeBtnId);

  if (window.innerWidth > threshold) {
      console.log('Width is greater than threshold');
      modalContainer.remove();
      modalBtn.remove();
  } else {
      modalBtn.addEventListener('click', () => {
          modalContainer.classList.add('show');
          modal.classList.add('show');
          document.body.classList.add('lock');
      })

      closeBtn.addEventListener('click', () => {
          modalContainer.classList.remove('show');
          modal.classList.remove('show');
          document.body.classList.remove('lock');
      })
  }
}
initModal('.filter-img', '.product-modal__container', '.product-modal', 'close', 1024.99);

