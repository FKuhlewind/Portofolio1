$(document).ready(function() {
    $(".toolContent").hide()
    $('.carousel').on('click', function() {
        val = $(this).data('value');
        $(".toolContent, .hammer").slideUp("slow")
        $('#'+val).slideDown("slow");
        });
    $('#hammSpan').on('click', function() {
        $(".toolContent").slideUp("slow")
        $('.hammer').fadeIn("slow");
        });
});
