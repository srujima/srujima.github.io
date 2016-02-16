$('.nav a').click(function() {
  $('.pages').hide();
  var index = $('.nav a').index(this);
  $('.pages').eq(index).show();
})
