function caesarCipherEncryptor(string, key) {
	// Write your code here.
	let alphaDictionary = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26,
	};
	let answer = "";
	for (let i = 0; i < string.length; i++) {
		let currChar = string[i];
		let currIndex = alphaDictionary[currChar];
		let newIndex = currIndex + key;
		if (newIndex > 26) {
			let remainder = newIndex % 26;
			newIndex = remainder;
		}
		let newLetter = Object.keys(alphaDictionary).find(
			(key) => alphaDictionary[key] === newIndex
		);
		answer += newLetter;
	}
	return answer;
}

//solution without dictionary

function caesarCipherEncryptor(string, key) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	string = string.toLowerCase();
	let answer = "";
	for (let i = 0; i < string.length; i++) {
		let currChar = string[i];
		let currIndex = alphabet.indexOf(currChar);
		let newIndex = (currIndex + key) % 26;
		answer += alphabet[newIndex];
	}
	return answer;
}
