// https://www.algoexpert.io/questions/Tournament%20Winner

function tournamentWinner(competitions, results) {
	let teamsObj = {};
	for (let i = 0; i < competitions.length; i++) {
		let individualCompetition = competitions[i];
		for (let j = 0; j < individualCompetition.length; j++) {
			let team = individualCompetition[j];
			if (results[i] === 0) {
				let winner = individualCompetition[1];
				if (!teamsObj[winner]) {
					teamsObj[winner] = 3;
				}
				teamsObj[winner] = teamsObj[winner] + 3;
			} else {
				let winner = individualCompetition[0];
				if (!teamsObj[winner]) {
					teamsObj[winner] = 3;
				}
				teamsObj[winner] = teamsObj[winner] + 3;
			}
		}
	}

	let winner = "";
	let largestScore = 0;
	for (key in teamsObj) {
		if (teamsObj[key] > largestScore) {
			winner = key;
			largestScore = teamsObj[key];
		}
	}

	return winner;
}
