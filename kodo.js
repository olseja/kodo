function clunk(times) {
	var num = times;
	while (num > 0) {
		display("brzęk");
		num = num - 1;
	}
}

function kodoskryptoinator(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {
		display("brzdęk!");
	} else if (size == 1) {
		display("biiip!");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}

function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
kodoskryptoinator(2);
console.log(clunkCounter);