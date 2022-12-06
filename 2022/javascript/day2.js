const events = require('events')
const readline = require('readline')
const { createReadStream } = require('fs')

const DEFAULT_FILE = '../files/day2_entry.txt'
const CHOICE_SEPARATOR = ' '
const INITIAL_SCORE = 0

const CHOICES = {
	ROCK: 'ROCK',
	PAPER: 'PAPER',
	SCISSORS: 'SCISSORS',
}

const POSSIBILITIES = {
	LOOSE: 'LOOSE',
	DRAW: 'DRAW',
	WIN: 'WIN',
}

const SCORE = {
	GESTURE: {
		[`${CHOICES.ROCK}`]: 1,
		[`${CHOICES.PAPER}`]: 2,
		[`${CHOICES.SCISSORS}`]: 3,
	},
	ROUND: {
		[`${POSSIBILITIES.LOOSE}`]: 0,
		[`${POSSIBILITIES.DRAW}`]: 3,
		[`${POSSIBILITIES.WIN}`]: 6,
	},
}

const hasPlayerOneWin = (player1Choice, player2Choice) => {
	if(player1Choice === CHOICES.ROCK && player2Choice === CHOICES.SCISSORS) {
		return true
	}
	if(player1Choice === CHOICES.SCISSORS && player2Choice === CHOICES.PAPER) {
		return true
	}
	if(player1Choice === CHOICES.PAPER && player2Choice === CHOICES.ROCK) {
		return true
	}
	return false
}

const getPointsOfDuel = (player1Choice, player2Choice, ROUND_SCORE) => {
	const drawScore = ROUND_SCORE[[`${POSSIBILITIES.DRAW}`]]
	const winScore = ROUND_SCORE[[`${POSSIBILITIES.WIN}`]]
	const looseScore = ROUND_SCORE[[`${POSSIBILITIES.LOOSE}`]]
	if(player1Choice === player2Choice) {
		return [drawScore, drawScore]
	}
	if(hasPlayerOneWin(player1Choice, player2Choice)) {
		return [winScore, looseScore]
	}
	return [looseScore, winScore]
}

const getPointsOfShapes = (player1Choice, player2Choice, GESTURE_SCORE) => {
	return [GESTURE_SCORE[player1Choice], GESTURE_SCORE[player2Choice]]
}

const getPointsOfRound =  (player1Choice, player2Choice, SCORE) => {
	const [player1ShapeScore, player2ShapeScore] = getPointsOfShapes(player1Choice, player2Choice, SCORE.GESTURE)
	const [player1DuelScore, player2DuelScore] = getPointsOfDuel(player1Choice, player2Choice, SCORE.ROUND)
	return [player1ShapeScore + player1DuelScore, player2ShapeScore + player2DuelScore ]
}

const PLAYERS_INPUT_CONVERSION = (choice) => {
	switch (choice) {
	case 'A':
		return CHOICES.ROCK
	case 'B':
		return CHOICES.PAPER
	case 'C':
		return CHOICES.SCISSORS
	case 'X':
		return CHOICES.ROCK
	case 'Y':
		return CHOICES.PAPER
	case 'Z':
		return CHOICES.SCISSORS
	}
}

const DEFAULT_RULES = {
	SCORE,
	CHOICES,
	INITIAL_SCORE,
	getPointsOfRound,
}

class Board {
	constructor(RULES = DEFAULT_RULES) {
		this.player1 = {
			score: RULES.INITIAL_SCORE,
		}
		this.player2 = {
			score: RULES.INITIAL_SCORE,
		}
		this.RULES = RULES
	}
	get player1score() {
		return this.player1.score
	}
	get player2score() {
		return this.player2.score
	}
	play(player1Choice, player2Choice) {
		const [player1RoundScore,player2RoundScore ] = this.RULES.getPointsOfRound(player1Choice, player2Choice, this.RULES.SCORE)
		this.player1.score =
			this.player1score
			+ player1RoundScore
		this.player2.score =
			this.player2score
			+ player2RoundScore
	}
}

const init = async (filename, convertInput) => {
	const board = new Board()
	const reader = readline.createInterface({
		input: createReadStream(filename),
		crlfDelay: Infinity,
	})

	reader.on('line', (line) => {
		const [player1ChoiceInput, player2ChoiceInput] = line.split(CHOICE_SEPARATOR)
		const [player1Choice, player2Choice] = convertInput(player1ChoiceInput, player2ChoiceInput)
		board.play(player1Choice, player2Choice)
	})
	await events.once(reader, 'close')
	return board
}


const run = async (filename = DEFAULT_FILE) => {
	const convertInput = (playerOneInput, playerTwoInput) => [PLAYERS_INPUT_CONVERSION(playerOneInput), PLAYERS_INPUT_CONVERSION(playerTwoInput)]
	const board = await init(filename, convertInput)
	return board.player2score
}


const runs = [run]
module.exports = { runs }
