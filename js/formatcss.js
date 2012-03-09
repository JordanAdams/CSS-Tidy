function make_blocks(css) {

	var input = document.getElementById('input');
	var css = input.value;
	var blocks = [];

	css = css.split('}');
	
	!css[length-1] || /^\s*$/.test(css[length-1]) ? css.pop() : false;

	for(var i in css) {

		var block = {selector: null, props: []};

		css[i] = css[i].split('{');
		
		block.selector = css[i][0].trim();
		var propvals = css[i][1].split(';') || null;

		/^\s*$/.test(propvals[propvals.length-1]) ? propvals.pop() : false;

		for(var x in propvals) {

			var pv = propvals[x].split(':');
			var prop = pv[0].trim();
			var val = pv[1].trim();

			block.props.push([prop, val]);

		}

		blocks.push(block);

	}

	return blocks;

}


function format_css(blocks, format_str) {

	format_str = format_str || "#selector {\n  #propertyA: #valueA;\n  #propertyB: #valueB;\n}\n\n#end"

	var format = {};
	var css = '';

	format.after_selector = format_str.match(/#selector([\S\s]*)#propertyA/)[1];
	
	format.after_property = format_str.match(/#propertyA([\S\s]*)#valueA/)[1];

	format.after_value = format_str.match(/#valueA([\S\s]*)#propertyB/)[1];

	format.after_close = format_str.match(/#valueB([\S\s]*)#end/)[1];

	console.log(format);

	for(b in blocks) {
		css += blocks[b].selector;
		css += format.after_selector;

		var props = blocks[b].props;

		for(pv in props) {
			css += props[pv][0];
			css += format.after_property;
			css += props[pv][1];
			css += pv != props.length-1 ? format.after_value : format.after_close;
		}
	}

	return css.trim();

}