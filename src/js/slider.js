// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

const bodyStyles = window.getComputedStyle(document.body);
const sliderSlidesPerView = parseInt(bodyStyles.getPropertyValue('--sliderSlidesPerView'));

// const viewportWidth = window.innerWidth;
// if (viewportWidth < 768) {}

// const sliderToggleStop = document.querySelector('.slider-toggle__stop');
// sliderToggleStop.addEventListener('click', () => {
//     mainSlider.autoplay.stop();
// });
// const sliderTogglePlay = document.querySelector('.slider-toggle__play');
// sliderTogglePlay.addEventListener('click', () => {
//     mainSlider.autoplay.start();
// });

// swiper-slider 

const mainSlider = new Swiper('.main-slider__swiper', {
  navigation: {
    nextEl: '.main-slider__arrow-next',
    prevEl: '.main-slider__arrow-prev',
  },
  slidesPerView: sliderSlidesPerView,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 800,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  // },
  autoHeight: true,
  loop: true,
  parallax: true,
  pagination: {
    el: '.main-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    // 1366: {
    //   slidesPerView: 4,
    // },
    // 1200: {
    //   slidesPerView: 3,
    // },
  },
});