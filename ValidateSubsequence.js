// Solution 1

function isValidSubsequence(array, sequence) {
	let pointer = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[pointer]) {
			if (pointer < sequence.length - 1) {
				pointer++;
			} else return true;
		}
	}
	return false;
}

// Solution 2

function isValidSubsequence(array, sequence) {
	let sequenceCounter = 0;
	for (let i = 0; i < array.length; i++) {
		let currChar = array[i];
		if (currChar === sequence[sequenceCounter]) {
			sequence.shift();
		}
	}
	if (sequence.length > 0) {
		return false;
	} else return true;
}
