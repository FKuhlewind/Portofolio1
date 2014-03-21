$(document).ready(function() { 

d3.json('https://student-data.firebaseio.com/.json', function(data) {
	studentData = data;

    	var studentTemplateScript = $("#students-template").html();

    	/* compile the templates*/
    	var theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
    	/* append the tables */
    	$("body").append(theStudentTemplate(studentData));
	$('tr td:last-child').hide();
	hidden = true;
	
	$("thead").on("click", "th#showHide", function(e){
		
		if (hidden)
		   { $('tr td:last-child').animate({width: 'show', opacity: 'show'}, 'slow');
		     hidden=false; }
		   { $('tr td:last-child').animate({width: 'hide', opacity: 'hide'}, 'slow'); } 
			
		e.preventDefault();
		});


    });

});
