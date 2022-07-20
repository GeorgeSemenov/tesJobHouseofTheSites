import Swiper, { Navigation} from 'swiper';


$(document).ready(function(){
    /* Swiper
  **************************************************************/
  let swiper;
  var init = false;
  
  /* On Load
  **************************************************************/
  window.addEventListener('load', function() {
    swiperMode();
  });

  /* On Resize
  **************************************************************/
  window.addEventListener('resize', function() {
    swiperMode();
  });

  /* Which media query
  **************************************************************/
  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1199px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches || tablet.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper('.ssl-cert .content-container', {
          modules: [Navigation],
          slidesPerView: 4,
          spaceBetween: 20,
          loop: false,
          // Responsive breakpoints
          breakpoints: {
            // when window width is >= 320px
            320: {slidesPerView: 1},
            // when window width is >= 480px
            640: {slidesPerView: 2},
            991: {slidesPerView: 3},
          },

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }

    }

    // Disable (for desktop)
    else if(desktop.matches && init) {
      swiper.destroy();
      init = false;
    }
  }
})