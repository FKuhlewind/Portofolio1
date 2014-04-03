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
  			    
  			    $('.appendMessage').prepend('<div class="line"></div>');
  			    $('.appendMessage').prepend('<div class="name">'+value.name+'</div>');
  			    $('.appendMessage').prepend('<div class="messa">'+value.message+'</div>');
  			    $('.appendMessage .line:last-child').remove();
			    });
            	});

		$("#sendMessage").on('click', function (){
    			   getTime();
    			   nameB = $("#messName").val();
    
    			   addcomment = $("#messText").val();
    			   addname = nameB+' '+datetime;
    
    			   myDataRef.child("messages").child(n).child(name).set(addname);
    			   myDataRef.child("messages").child(n).child(message).set(addcomment);
    
    			   alert("I have received your message, thank you!");
    			   window.location.reload();
		 });

$(".others").on('click', function () {
	    	$('.appendMessage').slideToggle("slow");
	    	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
            	});
});
