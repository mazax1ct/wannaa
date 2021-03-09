//настройки fancybox
$.fancybox.defaults.autoFocus = false;
$.fancybox.defaults.touch = false;
$.fancybox.defaults.hash = false;
$.fancybox.defaults.toolbar = false;
$.fancybox.defaults.smallBtn = false;
$.fancybox.defaults.i18n.en.CLOSE = "Закрыть";
$.fancybox.defaults.i18n.en.NEXT = "Вперёд";
$.fancybox.defaults.i18n.en.PREV = "Назад";

//открытие основного меню
$(document).on('click', '.js-menu-opener', function() {
  $('body').addClass('menu-open');
  $('.main-menu').addClass('is-open');
  return false;
});

//закрытие основного меню
$(document).on('click', '.js-menu-closer', function() {
  $('body').removeClass('menu-open');
  $('.main-menu').removeClass('is-open');
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});

$(document).ready(function() {
  //кастомный селект
	$('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     placeholder: $(this).attr('placeholder')
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper');
		$p.removeClass('open');
	});

  //маска ввода телефона
  $(".js-phone-mask").inputmask("+7 (999) 999 - 99 - 99",{"clearIncomplete": true, showMaskOnHover: false});
});

//открытие/закрытие аккордеона
$(document).on('click', '.js-accordion-toggler', function() {
  $(this).toggleClass('is-open');
  $(this).next('.accordion__dropdown').slideToggle();
  return false;
});
