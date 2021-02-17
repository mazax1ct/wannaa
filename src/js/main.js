//открытие основного меню
$(document).on('click', '.js-menu-opener', function() {
  $('body').addClass('overflow');
  $('.main-menu').addClass('is-open');
  return false;
});

//закрытие основного меню
$(document).on('click', '.js-menu-closer', function() {
  $('body').removeClass('overflow');
  $('.main-menu').removeClass('is-open');
  return false;
});

$(document).ready(function() {
  //слайдер главного баннера
  $('.js-main-banner').slick({
    arrows: false,
    dots: true
  });
});
