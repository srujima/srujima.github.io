$('nav a').click(function() {
  $('.about, .contactinfo').hide().filter(this.getAttribute('href')).show();
});
