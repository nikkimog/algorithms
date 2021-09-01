// Solution 1
function twoNumberSum(array, targetSum) {
	let hashTable = {};
	for (let i = 0; i < array.length; i++) {
		let currNum = array[i];
		let complementaryNum = targetSum - currNum;
		if (hashTable[complementaryNum]) {
			return [array[i], complementaryNum];
		}
		hashTable[currNum] = true;
	}
	return [];
}

//Solution 2
function twoNumberSum(array, targetSum) {
	let hashTable = {};

	array.forEach((item) => (hashTable[item] = true));
	let answer = [];
	array.forEach((item) => {
		let complementarySum = targetSum - item;
		hashTable[item] = false;
		if (hashTable[complementarySum]) {
			hashTable[complementarySum] = false;
			answer.push(item, complementarySum);
		}
	});
	return answer;
}

// Solutuion 1 is more efficient, as it has O(n) time complexity, whereas Solution 2
// has O(2n) time complexity.
