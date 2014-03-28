$(document).ready(function() {

mainP = window.parent.document;

picGallery = ["url(http://www.geometrian.com/data/programming/projects/Game%20of%20Life/2/GameOfLife2.png)",
            "url(http://blog.robbiecooper.org/wp-content/uploads/2009/02/image.jpg)",
            "url(http://krcadinac.com/pictures/600px-Turing_machine_1.JPG)",
             ];

// background, font, bars
colG = [ ["rgba(88, 88, 88,", "rgba(193, 225, 166,", "rgba(17, 140, 78,"],
         ["rgba(198, 61, 15,", "rgba(51, 51, 51,", "rgba(126, 143, 124,"],
         ["rgba(153, 147, 69,", "rgba(253, 243, 231,", "rgba(51, 51, 51,"] ];
             
toColor = [ ".quote, .green, .text, .author",
            ".nav, .footer" ];

fontG = [ '"Lucide Grande"',
          '"Lucida Bright"',
          '"Trebuchet MS"'];
          
toFont = ".quote-container, .nav-in ul li a, .copy";

$("#applyPic").on("click", function(e) {
            myPicture = picGallery[$("#selPic").val()];
            $(mainP).find(".wrapper").css({'background-image':myPicture,'background-size':'100%'});
            });

$("#colorScheme").on("click", ".col", function(e) {
            colN = $(this).data('value');

            $(mainP).find(toColor[0]).css({'background-color':colG[colN][0]+'1)', 'fill':colG[colN][0]+'1)', 'color':colG[colN][1]+'1)'});
            $(mainP).find(toColor[1]).css({'background-color':colG[colN][2]+'1)'});
            $(mainP).find(".nav-in ul li a").css({'border':'2px solid '+colG[colN][2]+'1)'});
            
            $("#styleTable").css({'background-color':colG[colN][0]+'0.2)'});
            $("#styleTable div").css({'background-color':colG[colN][0]+'0.3)'});
            });

$("#fontScheme").on("click", ".col", function(e) {
            
            myFont = fontG[$(this).data('value')];
            
            $(mainP).find(toFont).css({'font-family':myFont});
            
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
