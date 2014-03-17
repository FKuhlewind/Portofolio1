$(document).ready(function() { 
    
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
            height: $(".assignment").css("height")
            }, 1500 );
        $( ".assignment" ).animate({
            height: $(".code").css("height")
            }, 1500 );    
        e.preventDefault();
        });
        
    //enable navigation  
    
    $(".tabs").on("click", "a", function () {
    	
    	sel = ($(this).attr("value"));
    	
    	$(".assignment iframe").fadeOut(1400).remove(); 
    	$(".assignment").append("<iframe src='page-"+sel+".html'></iframe>").fadeTo(1,0).fadeTo(1000,1);
    	
    	$(".code iframe").remove(); 
    	$(".code").append("<iframe src='code-"+sel+".html'></iframe>").fadeTo(1,0).fadeTo(1000,1);
    	
    	
    	});
    
    
    /*$('ul.tabs').each(function(){
    var $active, $content, $links = $(this).find('a');
    
    $active = $links.first().addClass('active');
    
  
    $content = $($active.attr('href'));
    $links.not(':first').each(function () {
        $($(this).attr('href')).hide();
    });
    $(this).on('click', 'a', function(){
        $active.removeClass('active');
        $content.hide();    
        $active = $(this);
        $content = $($(this).attr('href'));
        $active.addClass('active');
        $content.delay(100).fadeIn("slow");
        
    	});
   });*/
   
   //create random quotes
   /*myDataRef = new Firebase('https://ast-quotes.firebaseio.com/');
    function changeText() {
        d3.json('https://ast-quotes.firebaseio.com/.json', function(data) {
	    quotes = data;
            var random = Math.floor(Math.random() * 11);
            
            $('.text').fadeOut("slow", function(){
   		var div = $("<div class='text'>"+quotes[random].quote+"</div>").hide();
   		$(this).replaceWith(div);
   		$('.text').fadeIn("slow");
		});
            $('.author').fadeOut("slow", function(){
   		var div = $("<div class='author'>"+quotes[random].author+"</div>").hide();
   		$(this).replaceWith(div);
   		$('.author').fadeIn("slow");
		});
            });
        };
    setInterval(changeText, 15000);*/
   
});  
