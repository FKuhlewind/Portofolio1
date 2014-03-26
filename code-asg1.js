$(document).ready(function() {

mainP = window.parent.document;

$("#yellC").on("click", function () {
    //$(mainP).find(".author").replaceWith("Suppa");
    
    $(mainP).find(".quote, .green").css({'background-color': 'yellow', 'fill': 'yellow', 'color': 'grey'});

    });
  


});
