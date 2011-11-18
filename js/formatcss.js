function minify_css(css) {

	/* Selectors */
	patt = /\s+{/g;
	css = css.replace(patt, '{')

	/* Prop : Val */
	patt = /:\s+/g;
	css = css.replace(patt, ':');
	patt = /\s+:/g;
	css = css.replace(patt, ':');

	/* Val ; */
	patt = /;\s+/g;
	css = css.replace(patt, ';');
	patt = /\s+;/g;
	css = css.replace(patt, ';');

	/* Val Commas */
	patt = /,\s+/g;
	css = css.replace(patt, ',');
	patt = /\s+,/g;
	css = css.replace(patt, ',');

	/* Tabs */
	patt = /\t/g;
	css = css.replace(patt, '');

	/* Carriage Returns */
	patt = /\n/g;
	css = css.replace(patt, '');
	patt = /\r/g;
	css = css.replace(patt, '');

	return css;

}

function format_css(css) {

	css = minify_css(css);

	/* ; Semicolons */
	css = css.replace(/;/g, ";\n  ");

	/* {} Braces */
	css = css.replace(/{/g, " {\n  ");
	css = css.replace(/  }/g, "}\n\n");

	/* : Colons */
	css = css.replace(/:/g, ": ");

	/* , Commas */
	css = css.replace(/,/g, ", ");

	/* Psuedo Selectors */
	css = css.replace(/(.+:) (.+{)/g, '$1$2');

	console.log(css);
	return css;

}