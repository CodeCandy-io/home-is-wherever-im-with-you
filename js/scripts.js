$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();

  $('.-fade-in').each(function() {
      var topDistance = $(this).offset().top;

      if ( (topDistance-850) < scrollTop ) {
        $(this).addClass('-reveal');
      } else {
        $(this).removeClass('-reveal');
      }
  });
});