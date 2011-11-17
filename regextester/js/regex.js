function $(selector) {
	return bonzo(qwery(selector));
}

var string = "div#box {\n    border-radius: 3px;\n}";

console.log("Match: " + match);

var regex = /border-radius:\s*.+;/i;

var match = string.match(regex);

console.log("Match: " + match);

var replacement = [
	match[0]+"\n",
	"    -moz-" + match[0]+"\n",
	"    -webkit-" + match[0]
];

console.log(replacement);

replacement = replacement.join("");

string = string.replace(regex, replacement);

console.log(string);