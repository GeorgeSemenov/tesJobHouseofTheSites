import Swiper, {Pagination, Autoplay} from 'swiper';
$(document).ready(function(){
  let swiper = new Swiper('.reviews-section__reviews', {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   delay: 2500,
    // },
    loop: true,
    pagination: {
      el: '.reviews-section__review-pagination',
      clickable: true,
    }
  });
})