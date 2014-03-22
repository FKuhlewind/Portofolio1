$(document).ready(function() { 

function hideInput () {
	$('tr td:last-child, tbody tr:last-child, #hide, .newS, #saveStud').hide();
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

	// try to set new firebase here
	
	
	
	

	$("thead").on("click", "#edit", function(e){
		$('tr th:last-child').toggleClass('lastColLong lastColShort');
		$("#addStud, tr td:last-child, tbody tr:last-child, #hide").show();
		$("#edit").hide();
		//e.preventDefault();
		});

	$("thead").on("click", "#hide", function(e){
		$('tr th:last-child').toggleClass('lastColLong lastColShort');
		$('#edit').show();
		hideInput();
		//e.preventDefault();
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
		alert ("Student added successfully.");
		window.location.reload();
		});
		
	$("tbody").on("click", ".delete", function(e) {
		
		//alert ( $(this).val() );
		
		myDataRef.child("students").child( $(this).val() ).remove(
		
		
		for ( var i = 0, l = appNum; i < l; i++ ) {
		//for ( var i = 0, l = studentData.students.length; i < l; i++ ) {
		
			myDataRef.child("students").child(i).child("first").set( studentData.students[i].first  );
			myDataRef.child("students").child(i).child("last").set( studentData.students[i].last  );
			myDataRef.child("students").child(i).child("uvaID").set( studentData.students[i].uvaID  );
			myDataRef.child("students").child(i).child("email").set( studentData.students[i].email  );
			};
		//myDataRef.child("students").child(studentData.students.length).set( null );
		
		alert ("Student removed.");
		window.location.reload();
		});
		);
	});

});
