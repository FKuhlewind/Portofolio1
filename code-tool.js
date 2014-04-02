$(document).ready(function() {

$(".toolcontent").hide()

$('.carousel').on('click', function() {
  $(".toolContent").hide()
  val = $(this).data('value');
  
  $(val).fadeIn("slow");
  
  });


});
