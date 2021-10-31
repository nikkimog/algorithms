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

// faster solution:
let stringNum = x.toString().split("").reverse();
if (stringNum[stringNum.length - 1] === "-") {
	stringNum.pop();
	stringNum = -stringNum.join("");
} else {
	stringNum = stringNum.join("");
}
let numAnswer = Number(stringNum);
if (numAnswer < Math.pow(-2, 31)) {
	return 0;
}
if (numAnswer > Math.pow(2, 31)) {
	return 0;
}
return numAnswer;
