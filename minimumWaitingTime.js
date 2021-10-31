// https://www.algoexpert.io/questions/Minimum%20Waiting%20Time

let sortedQueries = queries.sort((a, b) => a - b);
let waitingTime = 0;
let waitingTimeArray = [];
for (let i = 1; i < sortedQueries.length; i++) {
	waitingTime += sortedQueries[i - 1];
	waitingTimeArray.push(waitingTime);
}
function add(accumulator, a) {
	return accumulator + 1;
}
return waitingTimeArray.reduce((sum, a) => sum + a, 0);
