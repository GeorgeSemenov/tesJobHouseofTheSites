//упрощённая схема аккордеона находится тут https://codepen.io/Goshanbo/pen/ExEPOXg
$(document).ready(function(){
  // let pages = $(`.header__nav-pages`); 
  // В этой версии шапки - страничек нет;
  let services = $(`.header__nav-services`);
  let contacts = $(`.header__contacts`);
  let submenu = $(`.header__service-submenu`);
  if($(window).width() < 767 ){
    contacts.css({"display" : "none"})//При запуске на мобилках контакты должны быть скрытыми.
  }
  window.addEventListener('resize', function(event) {
    if($(window).width() > 767 ){
      contacts.css({"display" : "flex"});
      services.css({"display" : "block"});
    }else{//для мобилок
      if(!$(`.header`).hasClass(`header_expanded`)){//Если хедер свёрнут
        contacts.css({"display" : "none"});
        services.css({"display" : "none"});
      }
    }
  }, true);

  $('.header__sandwich-ico-container').click(function(){//При нажатии на бутерброд будет пересчитанна высота хедера
    contacts.slideToggle();
    services.slideToggle();

    $('.header').toggleClass('header_expanded');
  });

  //функция для открытия и закрытия выпадающего списка и подсчёта высоты хедера на мобильных версиях
  $('.header__service-href_dropdown').click(function(){
    let thisSubmenu = $(this).siblings(".header__service-submenu");
    $(this).toggleClass('header__service-href_dropdown_pic-rotated');
    thisSubmenu.slideToggle();
  })
})
