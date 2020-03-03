$().ready(function () {
  $('[rel="tooltip"]').tooltip();

  $('a.scroll-down').click(function (e) {
    e.preventDefault();
    scroll_target = $(this).data('href');
    $('html, body').animate({
      scrollTop: $(scroll_target).offset().top - 60
    }, 1000);
  });

  $('#myCarousel').carousel({
    interval: 4000
  });
});

function rotateCard(btn) {
  var $card = $(btn).closest('.card-container');
  if ($card.hasClass('hover')) {
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
}