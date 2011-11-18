function minify_css(css) {

	patt = /\/\*[\w\W]*?\*\//g;
	css = css.replace(patt, '');

	patt = /\s*{\s*/g;
	css = css.replace(patt, '{');

	patt = patt = /\s*}\s*/g;
	css = css.replace(patt, '}');

	patt = /;\s*/g;
	css = css.replace(patt, ';');

	return css;

}

function format_css(css) {

	css = minify_css(css);

	/* prop:val */
	pattern = /([^\{\}:;\s]+)\s*:\s*([^\s:;{}][^:;{}]+[^\s:;{}]|[^\s:;{}]+)\s*([;}])/g;
	css = css.replace(pattern, '  $1: $2$3');

	/* Opening { */
	css = css.replace(/\{/g, ' {\n');

	/* Ending ; */
	css = css.replace(/;/g, ';\n');

	/* Closing } */
	css = css.replace(/\s*}/g, '\n}\n\n');

	/* Whitepace at beginning */
	css = css.replace(/\s*(.)/, '$1');

	return css;

}