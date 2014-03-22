$(document).ready(function() { 

d3.json('https://student-data.firebaseio.com/.json', function(data) {
	studentData = data;
	rawData = data;
	//alert (data.students.length());
	studentData.students = studentData.students.filter(function(e){return e}); 

    	var studentTemplateScript = $("#students-template").html();

    	/* compile the templates*/
    	var theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
    	/* append the tables */
    	$("body").append(theStudentTemplate(studentData));
	$('tr td:last-child').hide();
	$('tbody tr:last-child').hide();
	$('#hide').hide();
	$('.newS').hide();
	$('#saveStud').hide();

	// enable toggle
	$("thead").on("click", "th#showHide", function(e){
		$('tr td:last-child').fadeToggle("slow");
		$('tbody tr:last-child').fadeToggle("slow");
		
		$('#edit,#hide').toggle();
		
		$('tr th:last-child').toggleClass('lastColLong lastColShort');
		
		e.preventDefault();
		});


    });

});
