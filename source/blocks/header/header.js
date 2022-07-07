//упрощённая схема аккордеона находится тут https://codepen.io/Goshanbo/pen/ExEPOXg
$(document).ready(function(){
  let pages = $(`.header__nav-pages`);
  let services = $(`.header__nav-services`);
  window.addEventListener('resize', function(event) {//При изменении ширины экрана происходит перерасчёт высоты хедера
      if (!$('.header').hasClass('header_expanded') && $(window).width() <= 767){//для мобилок и при свёрнутом хедере
        pages.css({"display": "none"});
        services.css({"display": "none"});
      }
      if($(window).width() > 767){
        pages.css({"display": "block"});
        services.css({"display": "block"});
      }
  }, true);

  $('.header__sandwich-ico-container').click(function(){//При нажатии на бутерброд будет пересчитанна высота хедера
    pages.slideToggle();
    services.slideToggle();

    $('.header').toggleClass('header_expanded');
  });

  //функция для открытия и закрытия выпадающего списка и подсчёта высоты хедера на мобильных версиях
  $('.header__service-href_dropdown').click(function(){
    let submenu = $(this).siblings(".header__service-submenu");
    $(this).toggleClass('header__service-href_dropdown_pic-rotated');
    submenu.toggleClass('header__service-submenu_show');
    submenu.slideToggle();
    if ($(window).width() <= 767 && submenu.hasClass(`header__service-submenu_show`)){
      //подсчитываем высоту элемента списка в котором содержится под меню - это высота заголовка подменю и высота самого подменю
      // submenu.parent().height(submenu.height() + submenu.siblings().height())
    }else if($(window).width() <= 767 && !submenu.hasClass(`header__service-submenu_show`)){
      //убираем высоту подменю
      // submenu.parent().height(submenu.siblings().height())
    }
  })
})
