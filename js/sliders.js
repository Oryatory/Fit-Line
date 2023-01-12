const swiper = new Swiper('.reviews__slider.swiper', {
    slidesPerView: 2,
    //spaceBetween: 76,
    simulateTouch: false,
    loop: true,

    navigation: {
        nextEl: '.reviews__slider__button-left',
        prevEl: '.reviews__slider__button-right'
    },
});