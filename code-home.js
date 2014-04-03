$(document).ready(function() {

// check localStorage and style accordingly
$('body, #onRight').css({'font-family':localStorage.myFont});
$("#messageBox").css({'background-color':localStorage.myColor+'0.2)'});
$(".message").css({'background-color':localStorage.myColor+'0.3)'});
$("button").css({'background-color':localStorage.myColor+'0.6)'});


});
