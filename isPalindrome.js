// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

var isPalindrome = function (s) {
	let lowercaseString = s.toLowerCase();
	let array = lowercaseString.split("");
	let newString = "";
	let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < array.length; i++) {
		let currChar = array[i];
		if (alphabet.includes(currChar)) {
			newString += currChar;
		}
	}
	for (let i = 0; i < newString.length; i++) {
		let currChar = newString[i];
		if (currChar !== newString[newString.length - 1 - i]) {
			return false;
		}
	}
	return true;
};
