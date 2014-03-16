$(document).ready(function() {  
    $(".go-swap").click(function() {  
        $("#div_1").swap({  
            target: "div_2", // Mandatory. The ID of the element we want to swap with  
            opacity: "0.5", // Optional. If set will give the swapping elements a translucent effect while in motion  
            speed: 1000, // Optional. The time taken in milliseconds for the animation to occur  
            callback: function() { // Optional. Callback function once the swap is complete  
                alert("Swap Complete");  
            }  
        });  
    });  
});  
