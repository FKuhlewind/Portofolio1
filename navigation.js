$(document).ready(function() { 
    
    //enable swapping
    function swapElements(elm1, elm2) {
        var parent1, next1,
        parent2, next2;
        parent1 = elm1.parentNode;
        next1   = elm1.nextSibling;
        parent2 = elm2.parentNode;
        next2   = elm2.nextSibling;
        parent1.insertBefore(elm2, next1);
        parent2.insertBefore(elm1, next2);
        };
    $("#swap_button").on("click", function () {
        swapElements($(".code")[0], $(".assignment")[0]);
        });
   
    //enable resizing
    $("#size_button").on("click", function () {
        $( ".code" ).animate({
            height: $(".assignment").css("height")
            }, 1500 );
        $( ".assignment" ).animate({
            height: $(".code").css("height")
            }, 1500 );    
        });
        
    //enable navigation    
    $('ul.tabs').each(function(){

    // Fuer jeden Satz Tabs wollen wir verfolgen welcher
    // Tab aktiv ist und der ihm zugeordnete Inhalt
    $active, $content, $links = $(this).find('a');

    // Der erste Link ist der zu Anfang akitve Tab
    $active = $links.first().addClass('active');
    $content = $($active.attr('href'));

    // Verstecke den restlichen Inhalt
    $links.not(':first').each(function () {
        $($(this).attr('href')).hide();
    });

    // Binde den click event handler ein
    $(this).on('click', 'a', function(e){

        // Mache den alten Tab inaktiv
        $active.removeClass('active');
        $content.fadeOut("slow", function () {    
		
        	// Aktualisiere die Variablen mit dem neuen Link und Inhalt
        	$active = $(this);
        	$content = $($(this).attr('href'));

        	// Setze den Tab aktiv
        	$active.addClass('active');
        	$content.fadeIn("slow");

        	// Verhindere die Anker standard click Aktion
        	e.preventDefault();
        	});
    	});
   });
});  
