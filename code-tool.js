$(document).ready(function() {

$(".toolcontent").hide()

$('.carousel').on('click', function() {
  $(".toolContent").hide()
  val = $('#demo').data('value');
  
  $(val).fadeIn("slow");
  
  });


});
