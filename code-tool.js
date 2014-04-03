$(document).ready(function() {
    $(".toolContent").hide()
    $('.carousel').on('click', function() {
        val = $(this).data('value');
        $(".hammer").fadeOut("slow");
        $(".toolContent").slideUp("slow")
        $('#'+val).slideDown("slow");
        });
});
