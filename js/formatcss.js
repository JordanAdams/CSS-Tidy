$(document).ready(function() {

	$('#arrow').live('click', function() {
		
		var input = $('#input textarea').text();

		$('#output pre').text(input);

	});

});