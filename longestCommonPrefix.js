var longestCommonPrefix = function (strs) {
	let longestPrefix = strs[0];
	for (let i = 0; i < strs.length; i++) {
		let currWord = strs[i];
		let currPrefix = "";
		for (let j = 0; j < currWord.length; j++) {
			if (currWord[j] === longestPrefix[j]) {
				currPrefix += currWord[j];
			} else break;
		}
		longestPrefix = currPrefix;
	}
	return longestPrefix;
};

// faster solution
var longestCommonPrefix = function (strs) {
	let longestPrefix = strs[0];
	let lengthOfLongestPrefix = strs[0].length;
	for (let i = 0; i < strs.length; i++) {
		let currWord = strs[i];
		for (let j = 0; j < longestPrefix.length; j++) {
			if (currWord[j] !== longestPrefix[j]) {
				let currentPrefix = currWord.slice(0, j);
				if (currentPrefix.length < lengthOfLongestPrefix) {
					longestPrefix = currentPrefix;
					lengthOfLongestPrefix = currentPrefix.length;
				}
			}
		}
	}
	return longestPrefix;
};
