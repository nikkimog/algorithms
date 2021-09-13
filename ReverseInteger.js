var reverse = function (x) {
	let splitInt = String(x).split("");

	let reversedInt = [];
	for (let i = splitInt.length - 1; i >= 0; i--) {
		reversedInt.push(splitInt[i]);
	}
	if (splitInt[0] === "-") {
		reversedInt.unshift("-");
		reversedInt.pop();
	}
	if (reversedInt.join("") < -2147483648 || reversedInt.join("") > 2147483648) {
		return 0;
	} else {
		return reversedInt.join("");
	}
};
