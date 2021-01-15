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

  function filterBlur(elem, valor) {
    $(elem).css('-webkit-filter', 'blur(' + valor + 'px)');
    $(elem).css('filter', 'blur(' + valor + 'px)');
    $(elem).css('-moz-filter', 'blur(' + valor + 'px)');
    $(elem).css('-o-filter', 'blur(' + valor + 'px)');
    $(elem).css('-ms-filter', 'blur(' + valor + 'px)');
  }

  $('.post.post-thumb .post-title a').hover(function () {    
    var result = $(this).parent().parent().parent().find('.post-img');
    filterBlur(result[0], 2);
  });
  
  $('.post.post-thumb .post-title a').mouseout(function(){
    var result = $(this).parent().parent().parent().find('.post-img');
    filterBlur(result[0], 0);
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
  
});

function rotateCard(btn) {
  var $card = $(btn).closest('.card-container');
  if ($card.hasClass('hover')) {
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
}