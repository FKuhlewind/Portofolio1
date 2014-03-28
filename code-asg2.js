$(document).ready(function() { 

myDataRef = new Firebase('https://student-data.firebaseio.com/');
//function hideInput () {
//	$('tr td:last-child, tbody tr:last-child, #hide, .newS, #saveStud, .saveChange').hide();
//	$("#addStudent").css({"background-color":"rgba(255,255,255,0)"});
//	};

// create template and hide input
function createTable () {
	d3.json('https://student-data.firebaseio.com/.json', function(data) {
		studentData = data;
		appNum = data.students.length;
		studentData.students = studentData.students.filter(function(e){return e}); 

    		studentTemplateScript = $("#students-template").html();
    		theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
    		/* append the tables */
    		$("#hand").remove();
    		$(".here").append(theStudentTemplate(studentData));
		//hideInput();
		$('tr td:last-child, tbody tr:last-child, #hide, .newS, #saveStud, .saveChange').hide();
		$("#addStudent").css({"background-color":"rgba(255,255,255,0)"});
		
		});
	};

createTable();

	$("thead").on("click", "#edit", function(e){
		$('tr th:last-child').toggleClass('lastColLong lastColShort');
		$("#addStud, tr td:last-child, tbody tr:last-child, #hide").show();
		$("#edit, .saveChange").hide();
		});

	$("thead").on("click", "#hide", function(e){
		//window.location.reload();
		
		createTable();
		
		});

	$("tbody").on("click", "td#addSave", function(e) {
		$('#addStud, .editStud, .delete ').hide();
		$('#saveStud').show();
		$('.newS').show();
		$("#addStudent").css({"background-color":"rgba(153,147,69,0.2)"});
		});

	$("tbody").on("click", "#saveStud", function(e) {
		myDataRef.child("students").child(appNum).child("first").set( $("#firstin").val() );
		myDataRef.child("students").child(appNum).child("last").set( $("#lastin").val() );
		myDataRef.child("students").child(appNum).child("email").set( $("#emailin").val() );
		myDataRef.child("students").child(appNum).child("uvaID").set( $("#uvaIDin").val() );
		//window.location.reload();
		
		createTable();
		
		alert ("Student added successfully.");
		});
		
	$("tbody").on("click", ".delete", function(e) {
		studentData.students.splice(  $(this).val(),1 );
		myDataRef.set( studentData );
		//window.location.reload();
		
		createTable();
		
		alert ("Student removed.");
		});
	
	$("tbody").on("click", ".editStud", function(e) {
		
		var vl = $(this).val();
		
		$(".editStud, .delete, #addStudent").hide();
		$("#edit"+vl).show();
		
		$("tr#stud"+vl).children(".inf1")
			.replaceWith("<td><input type='text' id='nFirst' value='"+studentData.students[vl].first+"'/></td>");
		$("tr#stud"+vl).children(".inf2")
			.replaceWith("<td><input type='text' id='nLast' value='"+studentData.students[vl].last+"'/></td>");
		$("tr#stud"+vl).children(".inf4")
			.replaceWith("<td><input type='text' id='nEmail' value='"+studentData.students[vl].email+"'/></td>"); 
		 
		$("#edit"+vl).on("click", function(e) {
			
			studentData.students[vl].first = $("#nFirst").val();
			studentData.students[vl].last = $("#nLast").val();
			studentData.students[vl].email = $("#nEmail").val();
			
			myDataRef.set( studentData );
			//window.location.reload();
			
			createTable();
			
			alert ("Your changes have been saved.");
			});
		});
	
});
