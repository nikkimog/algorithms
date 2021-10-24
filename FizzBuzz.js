var fizzBuzz = function (n) {
	let solution = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			solution.push("FizzBuzz");
		} else if (i % 3 === 0) {
			solution.push("Fizz");
		} else if (i % 5 === 0) {
			solution.push("Buzz");
		} else solution.push(i.toString());
	}
	return solution;
};
