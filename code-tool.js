$(document).ready(function() {
    $(".toolContent").hide();
    $('.carousel').on('click', function() {
        val = $(this).data('value');
        if ( !$(t'#'+val).is(":visible") )
            { 
              $(".toolContent, .hammer").slideUp("slow")
              $('#'+val).slideDown("slow"); }
              });
    $('#hammSpan').on('click', function() {
        $(".toolContent").slideUp("slow")
        $('.hammer').slideDown("slow");
        });
});
