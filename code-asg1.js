$(document).ready(function() {

mainP = window.parent.document;

$("#yellC").on("click", function () {
    //$(mainP).find(".author").replaceWith("Suppa");
    
    $(mainP).find(".qoute, .green").css({'background-color': 'yellow', 'fill': 'yellow'});

    });
  


});
