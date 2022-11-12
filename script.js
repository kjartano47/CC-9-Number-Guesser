let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
	let random = Math.floor(Math.random() * 10);
	return random;
};

const compareGuesses = (human, computer, target) => {
	let hCloseness = Math.abs(human - target);
	let cCloseness = Math.abs(computer - target);
	if (hCloseness <= cCloseness) {
		return true;
	} else {
		return false;
	}
};

const updateScore = (winner) => {
	if (winner === "human") {
		humanScore++;
	} else if (winner === "computer") {
		computerScore++;
	}
};
