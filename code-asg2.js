$(document).ready(function() { 

/* initialize the data objects */
var studentData = { students: [
    {"first": "Florian", "last": "Kuhlewind", "uvaID": "0282847", "email": "florian.kuhlewind@gmail.com"},
    {"first": "Anouk", "last": "Bouwer", "uvaID": "1482037", "email": "anouk.brouwer@live.nl"},
    {"first": "Paula", "last": "Carmicino", "uvaID": "0374836", "email": "fpaula.carmicino@gmail.com"},
    {"first": "Sjoerd", "last": "Handgraaf", "uvaID": "8037483", "email": "sjoerd.handgraaf@gmail.com"}, 
    {"first": "Ricci", "last": "Hessling", "uvaID": "4830278", "email": "ricci.hessling@gmail.com"}
    ]};

var studentTemplateScript = $("#students-template").html();

/* compile the templates*/
var theStudentTemplate = Handlebars.compile(studentTemplateScript);
  
/* append the tables */
$("body").append("<p></p><h1>Show Students</h1>").append(theStudentTemplate(studentData));


/* hide new tables and enable slideToggle */
//$(".info table").slice(1).hide();
//$('.info h1').on('click', function () { $(this).next("table").slideToggle("slow")});


});
