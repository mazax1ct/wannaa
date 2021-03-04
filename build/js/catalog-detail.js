$(document).ready(function() {
  if($('body').width() > 1023) {
    $('.js-images-slider').slick({
      swipe: false,
      mobileFirst: true,
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $('.js-thumbs').slick({
      mobileFirst: true,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.js-images-slider',
      dots: false,
      focusOnSelect: true
    });
  }

  //слайдер луков
  if($('body').width() > 767) {
    $('.js-looks-slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
    });
  }
});
