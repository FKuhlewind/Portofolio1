$(document).ready(function() {
    
// check localStorage and choose font accordingly
$('body, #toolLeft').css({'font-family':localStorage.myFont});
$("#background, #toolRight, .carousel").css({'background-color':localStorage.myColor+'0.2)'});

//if ( !localStorage.myFont=="Trebuchet MS" ) {
    $('.carousel').css({'font-size':'15px'});
  //  } ;

    
    $(".toolContent").hide();
    $('.carousel').on('click', function() {
        val = $(this).data('value');
        
        $('.carousel').css({'background-color':localStorage.myColor+'0.2)'});
        $('#toolRight').css({'background-color':localStorage.myColor+'0.6)'});
        
        if ( !$('#'+val).is(":visible") )
            { $(".toolContent, .hammer").slideUp("slow");
            
              $('.carousel').css({'background-color':localStorage.myColor+'0.2)'});
              $(this).css({'background-color':localStorage.myColor+'0.6)'});
            
              $('#'+val).slideDown("slow"); }
        });
    $('#hammSpan').on('click', function() {
        $('.carousel, #toolRight').css({'background-color':localStorage.myColor+'0.2)'});
        $(".toolContent").slideUp("slow");
        $('.hammer').slideDown("slow");
        });
});

