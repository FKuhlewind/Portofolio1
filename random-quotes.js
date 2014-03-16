$(document).ready(function() { 
    
    //myDataRef = new Firebase('https://ast-quotes.firebaseio.com/');
    
    function changeText() {
 
        var random = 1 + Math.floor(Math.random() * 3);
        console.log(random);
        
        };
        
    setInterval(changeText, 1000);
    
});  
