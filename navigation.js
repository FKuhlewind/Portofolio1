$(document).ready(function() { 

// set initial style values
localStorage.setItem("myColor","rgba(153, 147, 69,");
localStorage.setItem("myFont", '"Trebuchet MS"'); 
codeH = 22%;
assgH = 73%;

    //enable swapping
    function swapElements(elm1, elm2) {
        var parent1, next1,
        parent2, next2;
        parent1 = elm1.parentNode;
        next1   = elm1.nextSibling;
        parent2 = elm2.parentNode;
        next2   = elm2.nextSibling;
        parent1.insertBefore(elm2, next1);
        parent2.insertBefore(elm1, next2);
        };
    $("#swap_button").on("click", function () {
        swapElements($(".main-in .code")[0], $(".main-in .assignment")[0]);
        });
   
    //enable resizing
    $("#size_button").on("click", function (e) {
    	
    	
    	
        $( ".code" ).animate({
            height: assgH //$(".assignment").css("height")
            }, 1000 );
        $( ".assignment" ).animate({
            height: codeH //$(".code").css("height")
            }, 1000 ); 
        
        codeH = 73%;
	assgH = 22%;
	
        e.preventDefault();
        });
        
    //enable navigation  
    $(".tabs").on("click", "a", function (e) {
    	
    	if ( !$(this).hasClass('selected') ) {
    	 
    		sel = ($(this).attr("value"));
    	
    	    	$("a").removeClass("selected");
    		$(this).addClass("selected");
    	
    		$(".assignment iframe").remove(); 
    		$(".assignment").append("<iframe src='page-"+sel+".html'></iframe>").fadeTo(1,0).fadeTo(700,1);
    	
    		$(".code iframe").remove(); 
    		$(".code").append("<iframe src='code-"+sel+".html'></iframe>").fadeTo(1,0).fadeTo(700,1);
    	
    		e.preventDefault();
    		} { e.preventDefault() }
    	});
   
   //enable and disable tooltipster
    prettyPrint();
    $('.yell').tooltipster();
    $('.yell').tooltipster('disable');
       
    $('.codeRight').on("click", ".codeButton2", function () {
      		$('.yell').addClass('tt');
       		$('.yell').tooltipster('enable');
       		$('.codeButton2').replaceWith('<div class="codeButton3"><div class="dIn">Disable Tooltips</div></div>');
       		}); 	
      $('.codeRight').on("click", ".codeButton3", function () {
       		$('.yell').removeClass('tt');
       		$('.yell').tooltipster('disable');
       		$('.codeButton3').replaceWith('<div class="codeButton2"><div class="dIn">Enable Tooltips</div></div>');
       		}); 
   
   
   //display random quotes
   myDataRef = new Firebase('https://ast-quotes.firebaseio.com/');
    function changeText() {
        d3.json('https://ast-quotes.firebaseio.com/.json', function(data) {
	    quotes = data;
	    howMany = Object.keys(quotes).length;
            var random = Math.floor(Math.random() * howMany);
            
            fontE =  $('.text').css('font-family');
            colorE =  $('.text').css('color');
            
            $('.text').fadeOut("slow", function(){
   		var div = $("<div class='text'>"+quotes[random].quote+"</div>").hide();
   		$(this).replaceWith(div);
   		$('.text').css({'font-family':fontE, 'color':colorE}).fadeIn("slow");
		});
            $('.author').fadeOut("slow", function(){
   		var div = $("<div class='author'>"+quotes[random].author+"</div>").hide();
   		$(this).replaceWith(div);
   		$('.author').css({'font-family':fontE, 'color':colorE}).fadeIn("slow");
		});
            });
        };
    setInterval(changeText, 15000);
    
    
});
