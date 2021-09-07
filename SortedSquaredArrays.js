function sortedSquaredArray(array) {
	// Write your code here.

	let squared = array.map((item) => item * item);
	return squared.sort((a, b) => a - b);
}
