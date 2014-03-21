$(document).ready(function() { 

d3.json('https://student-data.firebaseio.com/.json', function(data) {
	studentData = data;

    	var studentTemplateScript = $("#students-template").html();

    	/* compile the templates*/
    	var theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
    	/* append the tables */
    	$("body").append(theStudentTemplate(studentData));
	$('tr td:last-child').hide();
	
	
	$("thead").on("click", "th#showHide", function(e){
		
		if (notHidden)
		   { $('tr td:last-child').animate({width: 'show', opacity: 'show'}, 'slow');
		     notHidden=false; }
		
		   { $('tr td:last-child').animate({width: 'hide', opacity: 'hide'}, 'slow'); 
		     notHidden=true; } 
			
		e.preventDefault();
		});


    });

});
