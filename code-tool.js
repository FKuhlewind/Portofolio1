$(document).ready(function() {

$(".toolContent").hide()

$('.carousel').on('click', function() {
  
  val = $(this).data('value');
  
  $(".toolContent").hide()
  
  
  $('#'+val).fadeIn("slow");
  
  });


});
