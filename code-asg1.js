$(document).ready(function() {

mainP = window.parent.document;

picGallery = ["url(http://www.geometrian.com/data/programming/projects/Game%20of%20Life/2/GameOfLife2.png)",
            "url(http://blog.robbiecooper.org/wp-content/uploads/2009/02/image.jpg)",
            "url(http://krcadinac.com/pictures/600px-Turing_machine_1.JPG)",
             ];

// background, font, bars
colG = [ ["#585858", "#C1E1A6", "#118C4E"],
         ["#C63D0F", "black", "#7E8F7C"],
         ["#8f9d45", "white", "#333333"] ];
             
toColor = [ ".quote, .green, .text, .author",
            ".nav, .footer" ];


$("#applyPic").on("click", function(e) {
            myPicture = picGallery[$("#selPic").val()];
            $(mainP).find(".wrapper").css({'background-image':myPicture,'background-size':'100%'});
            });

$("#colorScheme").on("click", ".col", function(e) {
            
            colN = $(this).data('value');
            
            //alert ("Color "+myColor);
            
            $(mainP).find(toColor[0]).css({'background-color':colG[colN][0], 'fill':colG[colN][0], 'color':colG[colN][1]});
            $(mainP).find(toColor[1]).css({'background-color':colG[colN][2]});
            
            $(mainP).find(".nav-in ul li a").css({'border':'2px solid '+colG[colN][2]});	
   
            
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
