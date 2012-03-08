window.addEventListener('load', function() {

	input = document.getElementById('input');
	format_input = document.getElementById('format_string');

	function update_output () {

		blocks = make_blocks(input.value);
		css = format_css(blocks, format_input.value);
		document.getElementById('output').innerHTML = css;

	}

	format_input.addEventListener('keyup', update_output, false);

	input.addEventListener('keyup', update_output, false);

});