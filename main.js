$(document).ready(function() { 
  $('nav a').click(function() {
  $('.pages').hide();
  $(this.getAttribute('href')).show()
});
$("a").click(function () {

    $("#div1").toggle("slide", {
        direction: "right"
    }, 500);

});
});
