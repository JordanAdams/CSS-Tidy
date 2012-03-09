

String.prototype.is_blank = function() {
	result = /^\s*$/.test(this);
	return result;
}

String.prototype.trim = function() {
	result = this.replace(/^\s+|\s+$/g, '');
	return result;
}

function id(id) {
	return document.getElementById(id);
}

function update_output() {

	
	var blocks = make_blocks(id('input').value);
	var css = format_css(blocks, id('format_string').value);
	id('output').innerHTML = css;

}


function do_watermarks() {
	
	var css_in = id('input');
	var css_out = id('output');
	var format_in = id('format_string')
	
	if(css_in.value.is_blank()) {
		css_in.value = 'Your CSS here...';
		css_out.innerHTML = 'Formatted CSS here...';
	}
	
	if(format_in.value.is_blank()) {
		format_in.value = '#selector {\n  #propertyA: #valueA;\n  #propertyB: #valueB;\n}\n\n#end';
	}

}