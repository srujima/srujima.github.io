$('.nav a').click(function() {
  $('.pages').hide();
  var index = $('.nav a').index(this);
  console.log(index);
  $('.pages').eq(index).show();
})
