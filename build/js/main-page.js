$(document).ready(function() {
  //слайдер главного баннера
  $('.js-main-banner').slick({
    arrows: false,
    dots: true
  });
});

//запуск видео по скроллу
var $video = $('video');
var $window = $(window);

$window.scroll(function() {
  var $topOfVideo = $video.offset().top;
  var $bottomOfVideo = $video.offset().top + $video.outerHeight();

  var $topOfScreen = $window.scrollTop();
  var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

  if(($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)){
    $video[0].play();
    $('.video-block__video-play').hide();
  } else {
    $video[0].pause();
    $('.video-block__video-play').show();
  }
});
