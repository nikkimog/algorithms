let romanDictionary = {
	I: 1,
	IV: 4,
	V: 5,
	IX: 9,
	X: 10,
	XL: 40,
	L: 50,
	XC: 90,
	C: 100,
	CD: 400,
	D: 500,
	CM: 900,
	M: 1000,
};
var romanToInt = function (s) {
	let romanArray = s.split("");
	let solution = 0;
	for (let i = 0; i < romanArray.length; i++) {
		let currentChar = romanArray[i];
		let nextChar = romanArray[i + 1];
		if (
			romanDictionary[currentChar] &&
			!romanDictionary[currentChar + nextChar]
		) {
			solution += romanDictionary[currentChar];
		}
		if (
			romanDictionary[currentChar] &&
			romanDictionary[currentChar + nextChar]
		) {
			solution += romanDictionary[currentChar + nextChar];
			if (i + 1 === romanArray.length - 1) {
				return solution;
			}
			i++;
		}
	}
	return solution;
};
