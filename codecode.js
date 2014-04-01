$(document).ready(function() { 

prettyPrint();
    $('.yell').tooltipster();
    $('.yell').tooltipster('disable');
       
    $('.codeRight').on("click", ".codeButton2", function () {
      		$('.yell').addClass('tt');
       		$('.yell').tooltipster('enable');
       		$('.codeButton2').replaceWith('<div class="codeButton3"><div class="dIn">Disable Tooltips</div></div>');
       		}); 	
    $('.codeRight').on("click", ".codeButton3", function () {
       		$('.yell').removeClass('tt');
       		$('.yell').tooltipster('disable');
       		$('.codeButton3').replaceWith('<div class="codeButton2"><div class="dIn">Enable Tooltips</div></div>');
       		}); 

});
