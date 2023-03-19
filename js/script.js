const teamSwiper = new Swiper(".team__swiper", {
    slidesPerView: 4,
    grid: {
        rows: 2,
    },
    spaceBetween: 21,
    navigation: {
        nextEl: '.team__next',
        prevEl: '.team__prev',
    },
    speed: 500,
    allowTouchMove: false,
});

const faqItems = document.querySelectorAll('.faq__name');
const faqDesc = document.querySelectorAll('.faq__desc');

for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener('click', function () {
        faqItems[i].classList.toggle('faq__name_active');
        faqDesc[i].classList.toggle('faq__desc_active');
    });
};

const talkSwiper = new Swiper(".talk__swiper", {
    navigation: {
        nextEl: ".talk__next",
        prevEl: ".talk__prev",
    },
    speed: 700,
    spaceBetween: 100,
    allowTouchMove: false,
});

const pressSwiper = new Swiper(".press__swiper", {
    slidesPerView: "auto",
    spaceBetween: 130,
    grabCursor: true,
});

const mediaSwiper = new Swiper(".media__swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".media__next",
        prevEl: ".media__prev",
    },
    speed: 500,
});