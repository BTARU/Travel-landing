"use strict";

const swiper = new Swiper(".offers__slider", {
    // Optional parameters

    navigation: {
        nextEl: ".offers__slider_next-btn",
        prevEl: ".offers__slider_prev-btn",
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
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

// Scroll from btn
const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener('click', onLinkClick);

function onLinkClick(e) {
    let link = e.target;
    if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        let gotoBlock = document.querySelector(link.dataset.goto);
        let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;         
        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
        e.preventDefault();
    }
}

