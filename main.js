$(document).ready(function() { 
  $('nav a').click(function() {
  $('.pages').hide();
  $(this.getAttribute('href')).show()
});
$(".contactinfo > a").click(function () {

    $("#div1").toggle("slide", {
        direction: "right"
    }, slow);

});
});
