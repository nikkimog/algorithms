// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

var mostCommonWord = function (paragraph, banned) {
	paragraph = paragraph.split(/\W/);
	paragraph = paragraph.filter((word) => word !== "");
	let wordBank = {};
	let mostPopularWord = "";
	let mostPopularCount = 0;
	for (let i = 0; i < paragraph.length; i++) {
		let currWord = paragraph[i].toLowerCase();
		if (!banned.includes(currWord)) {
			if (wordBank[currWord]) {
				wordBank[currWord]++;
				if (wordBank[currWord] > mostPopularCount) {
					mostPopularWord = currWord;
					mostPopularCount = wordBank[currWord];
				}
			} else wordBank[currWord] = 1;
			if (wordBank[currWord] > mostPopularCount) {
				mostPopularWord = currWord;
				mostPopularCount = wordBank[currWord];
			}
		}
	}
	return mostPopularWord;
};
