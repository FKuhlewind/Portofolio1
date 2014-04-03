$(document).ready(function() {
    $(".toolContent").hide()
    $('.carousel').on('click', function() {
        val = $(this).data('value');
        $(".toolContent, .hammer").slideUp("slow")
        $('#'+val).slideDown("slow");
        });
});
