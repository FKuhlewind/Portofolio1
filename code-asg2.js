$(document).ready(function() { 

function hideInput () {
	$('tr td:last-child, tbody tr:last-child, #hide, .newS, #saveStud').hide();
	$("#addStudent").css({"background-color":"white"});
	};


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
    	
	//$('tr td:last-child, tbody tr:last-child, #hide, .newS, #saveStud').hide();
	
	hideInput();
	
	//$('tr td:last-child').hide();
	//$('tbody tr:last-child').hide();
	//$('#hide').hide();
	//$('.newS').hide();
	//$('#saveStud').hide();
	
	//$("#addStudent").css({"background-color":"white"});

	// enable toggle
	$("thead").on("click", "th#showHide", function(e){
		$('tr td:last-child').fadeToggle("slow");
		$('tbody tr:last-child').fadeToggle("slow");
		
		$('#edit,#hide').toggle();
		$('tr th:last-child').toggleClass('lastColLong lastColShort');
		
		
		e.preventDefault();
		});

	$("tbody").on("click", "td#addSave", function(e) {
		
			$('#addStud').hide();
			$('#saveStud').show();
			$('.newS').show();
			$("#addStudent").css({"background-color":"#fdf6e3"});
			
			});


    });

});
