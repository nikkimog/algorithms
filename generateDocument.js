function generateDocument(characters, document) {
	let hashTable = {};
	for (let i = 0; i < characters.length; i++) {
		let currChar = characters[i];
		if (hashTable[currChar]) {
			hashTable[currChar]++;
		} else hashTable[currChar] = 1;
	}
	for (let i = 0; i < document.length; i++) {
		let currChar = document[i];
		if (hashTable[currChar]) {
			hashTable[currChar]--;
			if (hashTable[currChar] < 0) {
				return false;
			}
		} else {
			return false;
		}
	}
	return true;
}
