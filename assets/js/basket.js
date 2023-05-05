$(document).ready(function () {
    const clearAllBtn = $('#clear-all__btn');
    const options = $('.options');
    clearAllBtn.click(function (e) {
        e.preventDefault();
        toastr.options = {
            "closeButton": true,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        toastr["success"]("Все товары успешно удалены");
    });
    $(document).click(function (e) {
        if (!options.is(e.target) && options.has(e.target).length === 0) {
            options.removeClass('show');
        }
    });
    options.click(function () {
        $(this).toggleClass('show');
    });
});




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
initModal('.basket__btn', '.basket-modal__container', '.basket-modal', 'close', 1440);


if (window.innerWidth < 991.99) {
    const basketHeader = document.querySelector('.basket__header');
    const basketItemSize = document.querySelectorAll('.basket .size');
    basketHeader.remove();
    basketItemSize.forEach(size => size.remove())
}