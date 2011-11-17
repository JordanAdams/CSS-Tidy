function $ (selector) {
	return bonzo(qwery(selector));
}

var input = $('#input textarea').text();

console.log(input);