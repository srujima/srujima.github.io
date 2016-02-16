$('ul li a').click(function() {
  $('.pages').hide().filter(this.getAttribute('href')).show();
});
