$(document).ready(function() { 

var studentTemplateScript = $("#students-template").html();

/* compile the templates*/
var theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
/* append the tables */
$("body").append("<p></p><h1>Show Students</h1>").append(theStudentTemplate(studentData));


/* hide new tables and enable slideToggle */
//$(".info table").slice(1).hide();
//$('.info h1').on('click', function () { $(this).next("table").slideToggle("slow")});


});
