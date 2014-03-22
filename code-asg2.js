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
    	
	hideInput();
	
	$("thead").on("click", "#edit", function(e){
		
		$('tr th:last-child').toggleClass('lastColLong lastColShort');

		$("#addStud").show();

		$('tr td:last-child, tbody tr:last-child').show();
		$('#hide').show();
		
		$("#edit").hide();

		e.preventDefault();
		});


	$("thead").on("click", "#hide", function(e){
		
		$('tr th:last-child').toggleClass('lastColLong lastColShort');

		hideInput();
		$('#edit').show();


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
