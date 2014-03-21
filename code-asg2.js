$(document).ready(function() { 

d3.json('https://student-data.firebaseio.com/.json', function(data) {
	studentData = data;

    	var studentTemplateScript = $("#students-template").html();

    	/* compile the templates*/
    	var theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
    	/* append the tables */
    	$("body").append(theStudentTemplate(studentData));
	$('tr td:last-child').hide();
	$('tbody:last-child').hide();

	// enable toggle
	$("thead").on("click", "th#showHide", function(e){
		$('tr td:last-child').fadeToggle("slow");
		$('tbody:last-child').fadeToggle("slow");
		e.preventDefault();
		});


    });

});
