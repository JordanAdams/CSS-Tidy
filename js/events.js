function update_output(input) {
	
	input = format_css(input);

	$('#output pre').text(input);

}

$(document).ready(function() {

	$('#input textarea').keyup(function() {
		update_output($(this).val());
	});

	$('#input textarea').keydown(function() {
		update_output($(this).val());
	});

	$('#arrow').click(function() {
		update_output($('#input textarea').val());
	});

});