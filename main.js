$(document).ready(function() { 
  $('nav a').click(function() {
  $('.pages').hide();
  $(this.getAttribute('href')).show()
});
$(".contactinfo > a").click(function () {
 $('#div1').css({
      'width': $('#div1').width(),
      'height': $('#div1').height()
   });
   $('#div1').animate({'width': 'toggle'});
});
});
