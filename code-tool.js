$(document).ready(function() {
    
// check localStorage and choose font accordingly
$('body, #toolLeft').css({'font-family':localStorage.myFont});
$("#background, #toolRight, .carousel").css({'background-color':localStorage.myColor+'0.2)'});
//$(".carousel").css({'background-color':localStorage.myColor+'0.6)'});
    
    $(".toolContent").hide();
    $('.carousel').on('click', function() {
        val = $(this).data('value');
        if ( !$('#'+val).is(":visible") )
            { $(".toolContent, .hammer").slideUp("slow").css({'background-color':localStorage.myColor+'0.2)'});
              $('#'+val).css({'background-color':localStorage.myColor+'0.6)'}).slideDown("slow"); }
        });
    $('#hammSpan').on('click', function() {
        $(".toolContent").slideUp("slow")
        $('.hammer').slideDown("slow");
        });
});
