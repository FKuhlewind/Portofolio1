$(document).ready(function() {

mainP = window.parent.document;

picGallery = ["http://www.geometrian.com/data/programming/projects/Game%20of%20Life/2/GameOfLife2.png",
            "http://blog.robbiecooper.org/wp-content/uploads/2009/02/image.jpg",
            "http://krcadinac.com/pictures/600px-Turing_machine_1.JPG",
             ];

$("#applyPic").on("click", function(e) {
    
    myPicture = picGallery[$("#xselPic").val();
    $(mainP).find(".wrapper").css({'background-image':myPicture});
    
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
