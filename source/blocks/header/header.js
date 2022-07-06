$(document).ready(function(){
  let pagesHeight = $(".header__nav-pages").height();
  let servicesHeight = $(".header__nav-services").height();
  let headerVisiblePartHeight = 34;
  let headerTotalHeight = pagesHeight + servicesHeight + headerVisiblePartHeight;
  window.addEventListener('resize', function(event) {
    pagesHeight = $(".header__nav-pages").height();
    servicesHeight = $(".header__nav-services").height();
    headerTotalHeight = pagesHeight + servicesHeight + headerVisiblePartHeight;
    isClicked = false;
    if ($(window).width() >= 767)
      $('.header').height('auto');
    else
      if ($('.header').hasClass('header_expanded')){
        $('.header').height(headerTotalHeight);
      }else{
        $('.header').height(headerVisiblePartHeight);
      }
  }, true);
  $('.header__sandwich-ico-container').click(function(){
    $('.header').toggleClass('header_expanded');
    if ($('.header').hasClass('header_expanded')){
      $('.header').height(headerTotalHeight);
    }else{
      $('.header').height(headerVisiblePartHeight);
    }
  });
})
