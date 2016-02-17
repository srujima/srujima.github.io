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
   $('slide2').fadeOut();
});
$("#details2").click(function () {
 $('#slide2').slideToggle({direction: "down"}, 300);
 $('#slide1').fadeOut();
});
});
