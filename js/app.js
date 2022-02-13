"use strict";

const swiper = new Swiper(".offers__slider", {
    // Optional parameters

    navigation: {
        nextEl: ".offers__slider_next-btn",
        prevEl: ".offers__slider_prev-btn",
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },

    keyboard: {
        enabled: true,
    },

    grabCursor: true,

    initialSlide: 1,

    slidesPerView: 3,

    breakpoints: {
        991.98: {
            spaceBetween: 73,
        },

        767.98: {
            slidesPerView: 3,
            spaceBetween: 25,
        },

        479.98: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        320: {
            slidesPerView: 1,
        },
    },
});

// Прокрутка по клику
// Для прокрутки добавить к нужному элементу атрибут data-goto, его значение будет назначением прокрутки

document.addEventListener("click", scrollToElem);

function scrollToElem(e) {
    const targetElem = e.target;
    if (targetElem.dataset.goto && document.querySelector(targetElem.dataset.goto)) {
        const gotoBlock = document.querySelector(targetElem.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
        });
        e.preventDefault();
    }
}

// Scroll arrow to top of the page (elem #arrowToTop, add attr hidden)

if (document.querySelector("#arrowToTop")) {
    window.addEventListener("scroll", function () {
        if (scrollY > document.documentElement.clientHeight) {
            arrowToTop.hidden = false;
        } else arrowToTop.hidden = true;
    });

    arrowToTop.addEventListener("click", scrollToTop);

    function scrollToTop(event) {
        let targetElem = event.target.closest("#arrowToTop");

        if (targetElem) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }
}
