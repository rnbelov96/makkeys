const swiper = new Swiper('.swiper_video', {
  breakpoints: {
    970: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
  spaceBetween: 20,
  autoHeight: true,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper_slider', {
  breakpoints: {
    970: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  spaceBetween: 10,
  autoHeight: true,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-bottom',
    prevEl: '.swiper-button-prev-bottom',
  },
});
