const { runs, ConvertInputRound2 } = require('../day2')
const CARACTERISATION_FILE_ENTRY = '../files/day2_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 15
const CARACTERISATION_EXPECTED_OUTPUT_RUN2 = 12
const [ run, run2 ] = runs

const CHOICES = {
	ROCK: 'ROCK',
	PAPER: 'PAPER',
	SCISSORS: 'SCISSORS',
}

const INPUT = {
	ROCK: 'A',
	PAPER: 'B',
	SCISSORS: 'C',
	LOOSE: 'X',
	DRAW: 'Y',
	WIN: 'Z',
}

describe('day2', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
	test('caracterisation testing run 2', async () => {
		expect(await run2(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN2)
	})
})

let firstInput, secondInput
describe('#ConvertInputRound2', () => {
	describe('with a draw', () => {
		beforeEach(() => {
			secondInput = INPUT.DRAW
		})
		it('should return [PAPER, PAPER] if Player one choose paper', () => {
			firstInput = INPUT.PAPER
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.PAPER, CHOICES.PAPER])
		})
		it('should return [ROCK, ROCK] if Player one choose rock', () => {
			firstInput = INPUT.ROCK
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.ROCK, CHOICES.ROCK])
		})
		it('should return [SCISSORS, SCISSORS] if Player one choose scissors', () => {
			firstInput = INPUT.SCISSORS
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.SCISSORS, CHOICES.SCISSORS])
		})
	})
	describe('with a loose', () => {
		beforeEach(() => {
			secondInput = INPUT.LOOSE
		})
		it('should return [PAPER, ROCK] if Player one choose paper', () => {
			firstInput = INPUT.PAPER
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.PAPER, CHOICES.ROCK])
		})
		it('should return [ROCK, SCISSORS] if Player one choose rock', () => {
			firstInput = INPUT.ROCK
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.ROCK, CHOICES.SCISSORS])
		})
		it('should return [SCISSORS, PAPER] if Player one choose scissors', () => {
			firstInput = INPUT.SCISSORS
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.SCISSORS, CHOICES.PAPER])
		})
	})
	describe('with a win', () => {
		beforeEach(() => {
			secondInput = INPUT.WIN
		})
		it('should return [ROCK, PAPER] if Player one choose rock', () => {
			firstInput = INPUT.ROCK
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.ROCK, CHOICES.PAPER])
		})
		it('should return [SCISSORS, ROCK] if Player one choose scissors', () => {
			firstInput = INPUT.SCISSORS
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.SCISSORS, CHOICES.ROCK])
		})
		it('should return [PAPER, SCISSORS] if Player one choose paper', () => {
			firstInput = INPUT.PAPER
			expect (ConvertInputRound2(firstInput, secondInput)).toEqual([CHOICES.PAPER, CHOICES.SCISSORS])
		})
	})
})
