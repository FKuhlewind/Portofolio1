$(document).ready(function() {

$(".toolcontent").hide()

$('.carousel').on('click', function() {
  $(".toolcontent").hide()
  val = $('#demo').data('value');
  
  $(val).fadeIn("slow");
  
  });


});
