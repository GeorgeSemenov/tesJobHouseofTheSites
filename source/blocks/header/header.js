$(document).ready(function(){
  //функция для подсчёта высоты хедера
  //В мобильной версии высота хедера (headerTotalHeight) является суммой из 3х составляющих 
  //видимая часть - headerVisiblePartHeight - верхушка в которой находится сэндвич, логотип и кнопка поиска(пупа)
  //высота раздела со страничками - pagesHeight
  //высота раздела с сервисами - servicesHeight
  $(`.header__service-href_dropdown`).parent().height($(`.header__service-href_dropdown`).height());//Выставляем всем элементам списка в nav у которых есть выпадающий список высоту равную заголовку выпадающего списка
  let headerVisiblePartHeight = 34;
  let pagesHeight , servicesHeight , headerTotalHeight;
  calculateHeight();
  window.addEventListener('resize', function(event) {//При изменении ширины экрана происходит перерасчёт высоты хедера
    calculateHeight();
    if ($(window).width() >= 767)
      $('.header').height('auto');
    else
      if ($('.header').hasClass('header_expanded')){
        $('.header').height(headerTotalHeight);
      }else{
        $('.header').height(headerVisiblePartHeight);
      }
  }, true);

  $('.header__sandwich-ico-container').click(function(){//При нажатии на бутерброд будет пересчитанна высота хедера
    $('.header').toggleClass('header_expanded');
    if ($('.header').hasClass('header_expanded')){
      $('.header').height(headerTotalHeight);
    }else{
      $('.header').height(headerVisiblePartHeight);
    }
  });

  //функция для открытия и закрытия выпадающего списка и подсчёта высоты хедера на мобильных версиях
  $('.header__service-href_dropdown').click(function(){
    let submenu = $(this).siblings(".header__service-submenu");
    $(this).toggleClass('header__service-href_dropdown_pic-rotated');
    submenu.toggleClass('header__service-submenu_show');
    if ($(window).width() <= 767 && submenu.hasClass(`header__service-submenu_show`)){
      //подсчитываем высоту элемента списка в котором содержится под меню - это высота заголовка подменю и высота самого подменю
      submenu.height(submenu.height() + submenu.siblings().height())
    }else if($(window).width() <= 767 && !submenu.hasClass(`header__service-submenu_show`)){
      //убираем высоту подменю
      submenu.height(submenu.siblings().height())
    }
    calculateHeight();
    $('.header').height(headerTotalHeight);
  })

  function calculateHeight(){//подсчитывает headerTotalHeight
    pagesHeight = $(".header__nav-pages").height();
    servicesHeight = $(".header__nav-services").height();
    headerTotalHeight = pagesHeight + servicesHeight + headerVisiblePartHeight;
  }

})
