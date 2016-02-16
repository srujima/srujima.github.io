$('nav a').click(function() {
  $('.pages').hide();
  $(this.getAttribute('href')).show()
});
