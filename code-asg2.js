$(document).ready(function() { 

function hideInput () {
	$('tr td:last-child, tbody tr:last-child, #hide, .newS, #saveStud').hide();
	$("#addStudent").css({"background-color":"white"});
	};
myDataRef = new Firebase('https://student-data.firebaseio.com/');

d3.json('https://student-data.firebaseio.com/.json', function(data) {
	studentData = data;
	
	myDataRef.set(studentData);
	
	studentData.students = studentData.students.filter(function(e){return e}); 

    	var studentTemplateScript = $("#students-template").html();

    	/* compile the templates*/
    	var theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
    	/* append the tables */
    	$("body").append(theStudentTemplate(studentData));
    	
	hideInput();


	$("thead").on("click", "#edit", function(e){
		
		$('tr th:last-child').toggleClass('lastColLong lastColShort');

		$("#addStud, tr td:last-child, tbody tr:last-child, #hide").show();

		$("#edit").hide();

		e.preventDefault();
		});


	$("thead").on("click", "#hide", function(e){
		
		$('tr th:last-child').toggleClass('lastColLong lastColShort');

		
		$('#edit').show();
		hideInput();

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
