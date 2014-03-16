$(document).ready(function() { 
    
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
        swapElements($(".code")[0], $(".assignment")[0]);
        });
   
    
    $("#size_button").on("click", function () {
        
        $( ".code" ).animate({
            height: function () {
                    if ( $(".code").css("height")==70% ) {return "30%"} else {return "70%"};
                    }
            
            }, 1500 );
            
        $( ".assignment" ).animate({
            height: function () {
                    if ( $(".assignment").css("height")==70% ) {return "30%"} else {return "70%"};
                    }
            
            
            }, 1500 );    
            
        
        
        });
   
   
   
   
        
});  
