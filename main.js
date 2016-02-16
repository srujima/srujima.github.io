$('.nav a').click(function(e) {
  $('.pages').hide().filter(e.getAttribute('href')).show();
});
