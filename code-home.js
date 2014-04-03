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
	    	numb = messages.length;

		for ( var i = 0, l = numb; i < l; i++ ) {
				
				p=i;
				
    				$('.appendMessage').prepend('<div class="line"></div>');
  				$('.appendMessage').prepend('<div class="name">'+messages.messages[p].name+'</div>');
  				$('.appendMessage').prepend('<div class="messa">'+messages.messages[p].message+'</div>');
  				$('.appendMessage .line:last-child').remove();
			
    				};


		$("#sendMessage").on('click', function (e){
			
			   e.preventDefault();
			   e.stopPropagation();
			
    			   getTime();
    			   nameB = $("#messName").val();
    
    			   addcomment = $("#messText").val();
    			   addname = nameB+' '+datetime;
    
    			   myDataRef.child("messages").child(numb).child("name").set(addname);
    			   myDataRef.child("messages").child(numb).child("message").set(addcomment);
    
    			   alert("I have received your message, thank you!");
    			   window.location.reload();
			   });
		 });

$(".others").on('click', function () {
	    	$('.appendMessage').slideToggle("slow");
	    	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
            	});
});
