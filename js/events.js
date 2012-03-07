function update_output (input) {
	
	input = format_css(input);
	
	$('#code pre').text(input);

}


$(document).ready(function() {

	var watermark = 'Put your CSS in here...';

	$('#code textarea').keyup(function() {
		update_output($(this).val());
	});


	$('#code textarea').keydown(function() {
		update_output($(this).val());
	});


	$('#arrow').click(function() {
		update_output($('#code textarea').val());
	});


	$('#code textarea').focus(function() {

		if($(this).val() === watermark) {
			$(this).val('').css('color', '#000');
		}

	});


	$('#code textarea').blur(function () {
		
		if($(this).val() === '') {
			$(this).val(watermark).css('color', '#888');
		}

	});

});