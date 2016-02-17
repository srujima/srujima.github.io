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
 //$('#slide2').slideToggle({direction: "down"}, 300);
 $('#slide2').next().slideToggle();
   $('#slide2').animate('toggle');
   $('#slide1').hide();
});
});
