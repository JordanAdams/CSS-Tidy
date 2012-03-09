window.addEventListener('load', function() {

	do_watermarks();

	id('format_string').addEventListener('keyup', function() {
		update_output();
	}, false);
	
	/*id('format_string').addEventListener('click', function() {
		do_watermarks();
	}, false);*/

	
	id('input').addEventListener('keyup', function() {
		update_output();
	}, false);
	
	/*id('input').addEventListener('click', function() {
		do_watermarks();
	}, false);*/

}, false);