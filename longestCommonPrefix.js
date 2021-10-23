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
