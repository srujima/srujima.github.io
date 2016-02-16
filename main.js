$('.nav a').click(function() {
  $('.pages').hide().eq( $(this).index() ).show();
});
