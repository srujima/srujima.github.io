$('.nav a').click(function() {
  $('.pages').hide().filter(this.attr('href')).show();
});
