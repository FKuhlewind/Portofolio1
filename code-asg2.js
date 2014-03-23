$(document).ready(function() { 

function hideInput () {
	$('tr td:last-child, tbody tr:last-child, #hide, .newS, #saveStud, .saveChange').hide();
	$("#addStudent").css({"background-color":"white"});
	};
myDataRef = new Firebase('https://student-data.firebaseio.com/');

d3.json('https://student-data.firebaseio.com/.json', function(data) {
	studentData = data;
	appNum = data.students.length;
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
		$("#edit, .saveChange").hide();
		});

	$("thead").on("click", "#hide", function(e){
		//$('tr th:last-child').toggleClass('lastColLong lastColShort');
		//$('#edit, .editStud, .delete').show();
		//hideInput();
		window.location.reload();
		});

	$("tbody").on("click", "td#addSave", function(e) {
		$('#addStud').hide();
		$('#saveStud').show();
		$('.newS').show();
		$("#addStudent").css({"background-color":"#fdf6e3"});
		});

	$("tbody").on("click", "#saveStud", function(e) {
		myDataRef.child("students").child(appNum).child("first").set( $("#firstin").val() );
		myDataRef.child("students").child(appNum).child("last").set( $("#lastin").val() );
		myDataRef.child("students").child(appNum).child("email").set( $("#emailin").val() );
		myDataRef.child("students").child(appNum).child("uvaID").set( $("#uvaIDin").val() );
		window.location.reload();
		alert ("Student added successfully.");
		});
		
	$("tbody").on("click", ".delete", function(e) {
		studentData.students.splice(  $(this).val(),1 );
		myDataRef.set( studentData );
		window.location.reload();
		alert ("Student removed.");
		});
	
	$("tbody").on("click", ".editStud", function(e) {
		
		var vl = $(this).val();
		
		$(".editStud, .delete").hide();
		$("#edit"+vl).show();
		
		//$("tr#stud"+$(this).val()+":nth-child(1)").replaceWith("<td>Yo Hey</td>");
		
		$("tr#stud"+vl).children(".inf1")
			.replaceWith("<td><input type='text' value='super'/></td>")
			.chidren("input")
			.val( "text" );
		
		//alert ("Edit Number "+ $(this).val() );
		 
		});
		
	});

});
