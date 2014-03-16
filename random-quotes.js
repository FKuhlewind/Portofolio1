$(document).ready(function() { 
    
    myDataRef = new Firebase('https://ast-quotes.firebaseio.com/');
    
    function changeText() {
 
        d3.json('https://ast-quotes.firebaseio.com/.json', function(data) {
		    quotes = data;
            var random = 1 + Math.floor(Math.random() * 3);
            
            console.log(quotes);
            
            });
        
        //console.log(random);
        
        };
        
    setInterval(changeText, 5000);
    
});  
