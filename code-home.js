$(document).ready(function() {

// check localStorage and style accordingly
$('body, #onRight').css({'font-family':localStorage.myFont});
$("#messagebox, .appendMessage").css({'background-color':localStorage.myColor+'0.2)'});
$(".message").css({'background-color':localStorage.myColor+'0.3)'});
$("button").css({'background-color':localStorage.myColor+'0.6)'});

myDataRef = new Firebase('https://floriansmessages.firebaseio.com/');

function getTime () {
    var currentdate = new Date(); 
    datetime = " - " + currentdate.getDate() + "."
            + (currentdate.getMonth()+1)  + "." 
            + currentdate.getFullYear() + ", "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + "h"
            };

$('.appendMessage').hide();

d3.json('https://floriansmessages.firebaseio.com/.json', function(data) {
	    	messages = data;
	    	n = messages.length;
	    	$.each( messages , function( index, value ) {
  			    
  			    $('.appendMessage').prepend('<div class="name">'+value.name+'</div>');
  			    $('.appendMessage').prepend('<div class="messa">'+value.message+'</div>');
  			    $('.appendMessage').prepend('<div class="line"></div>');
			    });
            });

$(".others").on('click', function (){
	    	
	    	$('.appendMessage').slideToggle("slow");
	    	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
	    	
            });
	    	
$("#sendMessage").on('click', function (){
    getTime();
    nameB = $("#messName").val();
    
    comment = $("#messText").val();
    name = nameB+' '+datetime;
    
    
    
    alert(comment+' '+name);
    
  
    });


});
