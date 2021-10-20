var reverseWords = function (s) {
	let wordsWithoutSpaces = "";
	for (let i = 0; i < s.length; i++) {
		let currChar = s[i];
		let nextChar = s[i + 1];
		if (currChar !== " " && nextChar !== " ") {
			wordsWithoutSpaces += currChar;
		}
		if (currChar !== " " && nextChar === " ") {
			wordsWithoutSpaces += currChar + ",";
		}
	}
	if (wordsWithoutSpaces[wordsWithoutSpaces.length - 1] === ",") {
		wordsWithoutSpaces = wordsWithoutSpaces.slice(
			0,
			wordsWithoutSpaces.length - 1
		);
	}
	let arrayOfWords = wordsWithoutSpaces.split(",");
	let solution = "";
	for (let i = arrayOfWords.length - 1; i >= 0; i--) {
		let currWord = arrayOfWords[i];
		if (i !== 0) {
			solution += currWord + " ";
		}
		if (i == 0) {
			solution += currWord;
		}
	}
	return solution;
};

// a very long and not very efficient solution

var reverseWords = function (s) {
	let str_arr = s.split(/\W/);
	return str_arr
		.filter((element) => element !== "")
		.reverse()
		.join(" ");
};

// a much more efficient solution
