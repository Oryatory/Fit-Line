//Reviews slider

const swiper = new Swiper(".reviews__slider.swiper", {
  spaceBetween: 76,
  simulateTouch: false,
  loop: true,
  centeredSlides: true,

  breakpoints: {
    991: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    992: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },

  navigation: {
    nextEl: ".reviews__slider__button-left",
    prevEl: ".reviews__slider__button-right",
  },
});

//Ingredients swiper

let ingredientSwiperflag = false;
let ingredientSwiper;

const ingredientSwiperInit = () => {
  ingredientSwiper = new Swiper(".ingredients__internals__swiper.swiper", {
    simulateTouch: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,

    // breakpoints: {
    //   321: {},
    // },
    navigation: {
      nextEl: ".ingredients__slider-button-left",
      prevEl: ".ingredients__slider-button-right",
    },
  });
  ingredientSwiperflag = true;
};

const ingredientSwiperWrapper = document.querySelector(
  ".ingredients__internals__wrapper.swiper-wrapper"
);

let windowWidth = window.innerWidth;
if (windowWidth <= 600) {
  ingredientSwiperInit();
  ingredientSwiperWrapper.classList.remove("ingredients__internals__wrapper");
}

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth > 600 && ingredientSwiperflag === true) {
    ingredientSwiper.destroy(true, true);
    ingredientSwiperflag = false;
    ingredientSwiperWrapper.classList.add("ingredients__internals__wrapper");
  } else if (windowWidth <= 600 && ingredientSwiperflag === false) {
    ingredientSwiperInit();
    ingredientSwiperflag = true;
    ingredientSwiperWrapper.classList.remove("ingredients__internals__wrapper");
  }
});

//Results swiper

let resultSwiperflag = false;
let resultSwiper;

const resultSwiperInit = () => {
  resultSwiper = new Swiper(".resultstwo__images.swiper", {
    simulateTouch: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,

    // breakpoints: {
    //   321: {},
    // },
    navigation: {
      nextEl: ".resultstwo__button-left",
      prevEl: ".resultstwo__button-right",
    },
  });
  resultSwiperflag = true;
};

const resultSwiperWrapper = document.querySelector(
  ".resultstwo__images__wrapper.swiper-wrapper"
);

if (windowWidth <= 600) {
  resultSwiperInit();
  resultSwiperWrapper.classList.remove("resultstwo__images__wrapper");
}

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth > 600 && resultSwiperflag === true) {
    resultSwiper.destroy(true, true);
    resultSwiperflag = false;
    resultSwiperWrapper.classList.add("resultstwo__images__wrapper");
  } else if (windowWidth <= 600 && resultSwiperflag === false) {
    resultSwiperInit();
    resultSwiperflag = true;
    resultSwiperWrapper.classList.remove("resultstwo__images__wrapper");
  }
});

//Sertifcations slider

let sertSwiperflag = false;
let sertSwiper;

const sertSwiperInit = () => {
  sertSwiper = new Swiper(".sertifications__swiper.swiper", {
    simulateTouch: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoHeight: true,
    // breakpoints: {
    //   321: {},
    // },
    navigation: {
      nextEl: ".sertifications__button-left",
      prevEl: ".sertifications__button-right",
    },
  });
  sertSwiperflag = true;
};

const sertSwiperWrapper = document.querySelector(
  ".sertifications__elements.swiper-wrapper"
);

if (windowWidth <= 772) {
  sertSwiperInit();
  sertSwiperWrapper.classList.remove("sertifications__elements");
}

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  if (windowWidth > 772 && sertSwiperflag === true) {
    sertSwiper.destroy(true, true);
    sertSwiperflag = false;
    sertSwiperWrapper.classList.add("sertifications__elements");
  } else if (windowWidth <= 772 && sertSwiperflag === false) {
    sertSwiperInit();
    sertSwiperflag = true;
    sertSwiperWrapper.classList.remove("sertifications__elements");
  }
});
