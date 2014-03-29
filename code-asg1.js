$(document).ready(function() {

// check localStorage and style accordingly
$("#styleTable").css({'background-color':localStorage.myColor+'0.2)'});
$("#styleTable div").css({'background-color':localStorage.myColor+'0.3)'});
$("#applyPic").css({'background-color':localStorage.myColor+'0.6)'});
$('body, #onRight').css({'font-family':localStorage.myFont});

mainP = window.parent.document;

picGallery = ["none",
            "url(http://www.geometrian.com/data/programming/projects/Game%20of%20Life/2/GameOfLife2.png)",
            "url(http://blog.robbiecooper.org/wp-content/uploads/2009/02/image.jpg)",
            "url(http://krcadinac.com/pictures/600px-Turing_machine_1.JPG)",
             ];

// content, font, bars, quote
colG = [ ["rgba(88, 88, 88,", "rgba(193, 225, 166,", "rgba(17, 140, 78,","rgba(88, 88, 88,"],
         ["rgba(198, 61, 15,", "rgba(182, 182, 182,", "rgba(184, 29, 129,","rgba(32, 32, 32,"], /// DARK
         ["rgba(153, 147, 69,", "rgba(253, 243, 231,", "rgba(51, 51, 51,","rgba(143, 157, 69,"] ]; /// STANDARD
             
toColor = [ ".green, .text, .author",
            ".nav, .footer" ];

fontG = [ '"Century Gothic"',
          '"Lucida Bright"',
          '"Trebuchet MS"'];
          
toFont = ".text, .author, .nav-in ul li a, .copy";

$("#applyPic").on("click", function(e) {
            myPicture = picGallery[$("#selPic").val()];
            $(mainP).find(".wrapper").css({'background-image':myPicture,'background-size':'100%'});
            });

$("#colorScheme").on("click", ".col", function(e) {
            colN = $(this).data('value');
            localStorage.setItem("myColor",colG[colN][0]);
            
            //alert ($(this).data('value'));

            $(mainP).find(toColor[0]).css({'background-color':colG[colN][0]+'1)', 'fill':colG[colN][0]+'1)', 'color':colG[colN][1]+'1)'});
            $(mainP).find(toColor[1]).css({'background-color':colG[colN][2]+'1)'});
            
            $(mainP).find(".quote, .text, .author").css({'background-color':colG[colN][3]+'1)'});
            
            $(mainP).find(".nav-in ul li a").css({'border':'2px solid '+colG[colN][2]+'1)'});
            
            // hard stuff
            $("#applyPic").css({'background-color':localStorage.myColor+'0.6)'});
            $("#styleTable").css({'background-color':colG[colN][0]+'0.2)'});  ///
            $("#styleTable div").css({'background-color':colG[colN][0]+'0.3)'}); ///
            });

$("#fontScheme").on("click", ".col", function(e) {
            myFont = fontG[$(this).data('value')];
            localStorage.setItem("myFont", myFont); 
            
            $(mainP).find(toFont).css({'font-family':myFont});
            
            // hard stuff
            $('body, #onRight').css({'font-family':myFont});
            });

$("#factoryReset").on("click", function(e) {

            $(mainP).find(".wrapper").css({'background-image':'none'});
            
            localStorage.setItem("myColor",colG[2][0]);
            localStorage.setItem("myFont", fontG[2]); 

            $(mainP).find(toColor[0]).css({'background-color':colG[2][0]+'1)', 'fill':colG[2][0]+'1)', 'color':colG[2][1]+'1)'});
            $(mainP).find(toColor[1]).css({'background-color':colG[2][2]+'1)'});
            $(mainP).find(".nav-in ul li a").css({'border':'2px solid '+colG[2][2]+'1)'});
            
            $(mainP).find(".quote, .text, .author").css({'background-color':colG[2][3]+'1)'});
            
            $("#applyPic").css({'background-color':localStorage.myColor+'0.6)'});
            $("#styleTable").css({'background-color':colG[2][0]+'0.2)'});
            $("#styleTable div").css({'background-color':colG[2][0]+'0.3)'});
            
            $(mainP).find(toFont).css({'font-family':fontG[2]});
            $('body, #onRight').css({'font-family':fontG[2]});
            });
});
