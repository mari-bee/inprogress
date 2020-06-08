$(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});

$(document).ready(function () {
  $('.toggle-text').slideToggle(0); // скрывает текст

  $('.about-toggle_show').click(function () {
    $(this).prev('.toggle-text').slideToggle(200);

    if ($('.about-toggle_show').hasClass('active')) {
      $(this).html('Свернуть');
    } else {
      $(this).html('Читать дальше');
    }
    $('.about-toggle_show').toggleClass('active');
  });
});
