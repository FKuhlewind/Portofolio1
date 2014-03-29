$(document).ready(function() {

// check localStorage and style accordingly
$("#styleTable").css({'background-color':localStorage.myColor+'0.2)'});
$("#styleTable div").css({'background-color':localStorage.myColor+'0.3)'});
$("#applyPic").css({'background-color':localStorage.myColor+'0.6)'});
$('body, #onRight').css({'font-family':localStorage.myFont});

mainP = window.parent.document;

picGallery = ["none",
            "url(http://www.marekfiser.com/Img/1024/768/Img/Projects/GameOfLifeCuda/Zoom03.140211.png)",
            "url(http://2.bp.blogspot.com/_3KKJETFsdkI/TNN8FfzziYI/AAAAAAAAJa8/GPLnrwii4UU/s1600/cern.jpeg)",
            "url(http://www.mediahosting.at/cpg15x/albums/userpics/10001/HD_Space_Wallpapers_-_Star_field_-_hubble_deep_3.jpg)",
            "url(http://i1.ytimg.com/vi/G3h1QTe9XIE/maxresdefault.jpg)",
            "url(http://www.npl.co.uk/upload/img/turing-5.jpg)",
            "url(http://www.geekwithenvy.com/wp-content/uploads/2014/01/Aurora-.jpg)"
            
            
             ];

// content, font, bars, quote
colG = [ ["rgba(5, 25, 70,", "rgba(211, 213, 247,", "rgba(127, 178, 240,","rgba(78, 122, 199,"],
         ["rgba(133, 105, 65,", "rgba(182, 182, 182,", "rgba(184, 29, 24,","rgba(32, 32, 32,"], /// DARK 
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
