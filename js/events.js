function update_output (input) {
	
	input = format_css(input);
	
	$('#output pre').text(input);

}


$(document).ready(function() {

	var watermark = 'Put your CSS in here...';

	$('#input textarea').keyup(function() {
		update_output($(this).val());
	});


	$('#input textarea').keydown(function() {
		update_output($(this).val());
	});


	$('#arrow').click(function() {
		update_output($('#input textarea').val());
	});


	$('#input textarea').focus(function() {

		if($(this).val() === watermark) {
			$(this).val('').css('color', '#000');
		}

	});


	$('#input textarea').blur(function () {
		
		if($(this).val() === '') {
			$(this).val(watermark).css('color', '#888');
		}

	});

});