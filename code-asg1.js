$(document).ready(function() {

mainP = window.parent.document;

$("#yellC").on("click", function () {
    //$(mainP).find(".author").replaceWith("Suppa");
    
    $(mainP).find(".quote, .green, .text, .author, .wrapper").css({'background-color': 'yellow', 'fill': 'yellow', 'color': 'grey'});
    $(mainP).find(".main, iframe::-webkit-scrollbar-track").css({'background-color': 'gray'});
    });
  
$("#techF").on("click", function () {
    
    $(mainP).find(".text, .author, .nav-in ul li a, .copy p").css({'font-family': "Lucida Console" });
    });

$("#oceanB").on("click", function () {

    $(mainP).find(".wrapper").css({'background-image':'url(http://www.earthtimes.org/nsimages/files/ocean-acidification_23412.jpg)'});
    
    

    });

});
