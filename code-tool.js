$(document).ready(function() {
    
// check localStorage and choose font accordingly
$('body, #toolLeft').css({'font-family':localStorage.myFont});
$("#background, #toolRight, .carousel").css({'background-color':localStorage.myColor+'0.2)'});

    
    $(".toolContent").hide();
    $('.carousel').on('click', function() {
        val = $(this).data('value');
        
        $('.carousel').animate({backgroundColor:localStorage.myColor+'0.2)'});
        $(this).animate({backgroundColor:localStorage.myColor+'0.6)'});
        $("#toolRight").animate({backgroundColor:localStorage.myColor+'0.6)'});
        
        if ( !$('#'+val).is(":visible") )
            { $(".toolContent, .hammer").slideUp("slow");
              $('#'+val).slideDown("slow"); }
        });
    $('#hammSpan').on('click', function() {
        $('.carousel').animate({backgroundColor:localStorage.myColor+'0.2)'});
        $("#toolRight").animate({backgroundColor:localStorage.myColor+'0.2)'});
        $(".toolContent").slideUp("slow");
        $('.hammer').slideDown("slow");
        });
});

