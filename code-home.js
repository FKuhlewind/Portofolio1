$(document).ready(function() {

// check localStorage and style accordingly
$('body, #onRight').css({'font-family':localStorage.myFont});
$("#messagebox").css({'background-color':localStorage.myColor+'0.2)'});
$(".message").css({'background-color':localStorage.myColor+'0.3)'});
$("button").css({'background-color':localStorage.myColor+'0.6)'});

function getTime () {
    var currentdate = new Date(); 
    datetime = " - " + currentdate.getDate() + "."
            + (currentdate.getMonth()+1)  + "." 
            + currentdate.getFullYear() + ", "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + "h"
    };


$("#sendMessage").on('click', function (){
    getTime();
  
    alert(datetime);
  
    });


});
