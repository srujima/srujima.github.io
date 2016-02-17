$(document).ready(function() { 
  $('nav a').click(function() {
  $('.pages').hide();
  $(this.getAttribute('href')).show()
});
$("#details1").click(function () {
 $('#slide1').slideToggle({direction:"right"}, 300);
});
$("#details2").click(function () {
 $('#slide2').slideToggle({direction: "down"}, 300);
 $('#slide1').hide();
});
});
