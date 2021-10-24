function balancedBrackets(string) {
	// Write your code here.
	const openingBrackets = "([{";
	const closingBrackets = ")]}";
	const matchingBrackets = {
		"(": ")",
		"[": "]",
		"{": "}",
	};
	let stack = [];
	for (let i = 0; i < string.length; i++) {
		let currChar = string[i];

		if (openingBrackets.includes(currChar)) {
			stack.push(currChar);
		} else if (closingBrackets.includes(currChar)) {
			if (stack.length === 0) {
				return false;
			} else {
				if (matchingBrackets[stack[stack.length - 1]] !== currChar) {
					return false;
				}
				stack.pop();
			}
		}
	}
	if (stack.length) {
		return false;
	}
	return true;
}
