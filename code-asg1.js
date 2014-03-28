$(document).ready(function() {

mainP = window.parent.document;

myPicture = "";
picGallery = ["url(http://www.geometrian.com/data/programming/projects/Game%20of%20Life/2/GameOfLife2.png)",
            "url(http://blog.robbiecooper.org/wp-content/uploads/2009/02/image.jpg)",
            "url(http://krcadinac.com/pictures/600px-Turing_machine_1.JPG)",
             ];

$("#applyPic").on("click", function(e) {
   
            myPicture = picGallery[$("#selPic").val()];
            $(mainP).find(".wrapper").css({'background-image':myPicture,'background-size':'100%'});
    
            });

$("#colorScheme").on("click", ".col", function(e) {
            
            myColor = $(this).data('value');
            
            alert ("Color "+myColor);
            
            });


$("#fontScheme").on("click", ".col", function(e) {
            
            myFont = $(this).data('value');
            
            alert ("Font "+myFont);
            
            });



$("#yellC").on("click", function () {
    //$(mainP).find(".author").replaceWith("Suppa");
    
    $(mainP).find(".quote, .green, .text, .author, .wrapper").css({'background-color': 'yellow', 'fill': 'yellow', 'color': 'grey'});
    $(mainP).find(".main, iframe::-webkit-scrollbar-track").css({'background-color': 'gray'});
    });
  
$("#techF").on("click", function () {
    
    $(mainP).find(".text, .author, .nav-in ul li a, .copy p").css({'font-family': "Lucida Console" });
    });

$("#oceanB").on("click", function () {

    $(mainP).find(".wrapper").css({'background-image':'url(http://www.earthtimes.org/nsimages/files/ocean-acidification_23412.jpg)',
                                    'background-size':'100%'});
    
    

    });

});
