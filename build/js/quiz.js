var arr = [];
var controlObj = {};
var count, max = 0;
var outputClass = '';
var questionsCount = '';
var currentQuestion = '1';

function count(array) {
  var names = {};
  array.forEach(item => {
    names[item] = (names[item] || 0) + 1;
  });

  var maxValue = 0;
  var keyVal;

  for (var key in names) {
    var tempValue = names[key];
    if(maxValue < tempValue) {
      maxValue = tempValue;
      keyVal = key;
    }
  }

  //console.log(keyVal);

  outputClass = keyVal;

  return outputClass;
}

$(document).ready(function() {
  questionsCount = $('.quiz-section').length;
  $('#questionsCount').text(questionsCount);
});

$(document).on('change', '.quiz-section input', function () {
  $('.js-next').prop('disabled', '');
  return false;
});

$(document).on('click', '.js-next', function () {
  var currentSlide = $('.quiz-section.is-active'); //текущий вопрос
  currentSlide.removeClass('visible');

  arr = []; //обнуляем массив с выбранными ответами

  $('.quiz-section input:checked').each(function(indx, element) { //пихаем в массив все выбранные ответы
    arr.push($(element).val());
  });

  if($('.quiz-section:visible').next('.quiz-section').length === 0) { //если нет следующего вопроса
    $('.quiz__counter').css('opacity', '0'); //скрываем номер вопроса
    $('.js-prev').hide(); //скрываем кнопки
    $('.js-next').hide(); //скрываем кнопки
    $('.js-restart').show(); //скрываем кнопки
    count(arr); //считаем наибольшее количество одинаковых ответов

    $('.' + outputClass).addClass('is-active');
    $('.quiz-section.is-active').removeClass('is-active');
    $('.quiz__result').addClass('is-active'); //отображаем блок с результатом
    setTimeout(function() {
      $('.quiz__result').addClass('visible');
    },300);
  } else { //если есть следующий вопрос
    setTimeout(function() { //переключаем видимость текущего и сделующего вопроса
      currentSlide.removeClass('is-active');
      currentSlide.next('.quiz-section').addClass('is-active');

      if(currentSlide.next('.quiz-section').find('input:checked').length <= 0) {
        $('.js-next').prop('disabled', 'disabled'); //выключаем кнопку далее, чтобы не перескочили на следующий вопрос
      }

      setTimeout(function() {
        currentSlide.next('.quiz-section').addClass('visible');
      },300);
    },300);
  }

  $('.js-prev').prop('disabled', ''); //снимаем disabled  с кнопки назад

  currentQuestion = currentSlide.next('.quiz-section').index() + 1;

  $('#currentQuestion').text(currentQuestion);

  //console.log(arr);
});

$(document).on('click', '.js-prev', function () {
  var currentSlide = $('.quiz-section.is-active');
  currentSlide.removeClass('visible');

  setTimeout(function() {
    currentSlide.removeClass('is-active');
    currentSlide.prev('.quiz-section').addClass('is-active');
    if($('.quiz-section.is-active').prev('.quiz-section').length <= 0){
      $('.js-prev').prop('disabled', 'disabled');
    }
    setTimeout(function() {
      currentSlide.prev('.quiz-section').addClass('visible');
    },300);
  },300);
  $('.js-next').prop('disabled', '');

  currentQuestion = currentSlide.prev('.quiz-section').index() + 1;

  $('#currentQuestion').text(currentQuestion);
});

$(document).on('click', '.js-restart', function () {
  /*arr = [];
  controlObj = {};
  count, max = 0;
  output = '';
  currentQuestion = '1';

  $('#currentQuestion').text(currentQuestion);

  questionsCount = $('.quiz-section').length;
  $('#questionsCount').text(questionsCount);

  $('.quiz__counter').css('opacity', '1');

  $('.quiz-section').removeClass('is-active visible');
  $('.quiz-section').eq('0').addClass('is-active visible');

  $('.quiz__result').removeClass('is-active visible');
  $('.quiz__result-phrase').removeClass('is-active');

  $('.js-next').prop('disabled', 'disabled');
  $('.js-prev').prop('disabled', 'disabled');
  $('.js-prev').show();
  $('.js-next').show();
  $('.js-restart').hide();*/

  $('.js-next').prop('disabled', 'disabled');
  $('.js-prev').prop('disabled', 'disabled');
  window.location.reload();
});
