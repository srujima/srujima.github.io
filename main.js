$(document).ready(function() { 
  $('nav a').click(function() {
  $('.pages').hide();
  $(this.getAttribute('href')).show()
});
$("#details1").click(function () {
 $('#slide1').css({
      'width': $('#slide1').width(),
      'height': $('#slide1').height()
   });
   $('#slide1').animate({'width': 'toggle'});
});
$("#details2").click(function () {
 $('#slide2').css({
      'bottom': $('#slide2').bottom()
   });
   $('#slide1').animate({'bottom': 'toggle'});

});
