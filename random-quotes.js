$(document).ready(function() { 
    
    myDataRef = new Firebase('https://ast-quotes.firebaseio.com/');
    
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
            
            
            //console.log(random);
            
            });
        
        //console.log(random);
        
        };
        
    setInterval(changeText, 15000);
    
});  
