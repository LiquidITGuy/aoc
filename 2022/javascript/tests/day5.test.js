const { runs, convertLineStack, isLineOFdelimitation  } = require('../day5')
const CARACTERISATION_FILE_ENTRY = '../files/day5_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 'CMZ'
const [ run ] = runs

describe('day5', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
})
describe('convertLineStack',() => {
	let lineStack
	describe('with [N]         [C]     [Z]            ', () => {
		beforeEach(() => {
			lineStack = '[N]         [C]     [Z]            '
		})
		it('should return an array of 9 elements', () => {
			expect(convertLineStack(lineStack).length).toEqual(9)
		})
		it('should return an array with N as first element', () => {
			expect(convertLineStack(lineStack)[0]).toEqual('N')
		})
		it('should return an array with empty string as second element', () => {
			expect(convertLineStack(lineStack)[1]).toEqual('')
		})
	})
	describe('with [D] [C]    ', () => {
		beforeEach(() => {
			lineStack = '[D] [C]    '
		})
		it('should return an array of 3 elements', () => {
			expect(convertLineStack(lineStack).length).toEqual(3)
		})
		it('should return an array with D as first element', () => {
			expect(convertLineStack(lineStack)[0]).toEqual('D')
		})
		it('should return an array with C as second element', () => {
			expect(convertLineStack(lineStack)[1]).toEqual('C')
		})
		it('should return an array with empty string as third element', () => {
			expect(convertLineStack(lineStack)[2]).toEqual('')
		})
	})
})
describe('isLineOFdelimitation',() => {
	let lineStack
	describe('with [N]         [C]     [Z]            ', () => {
		beforeEach(() => {
			lineStack = '[N]         [C]     [Z]            '
		})
		it('should return false', () => {
			expect(isLineOFdelimitation(lineStack)).toEqual(false)
		})
	})
	describe('with an empty line', () => {
		beforeEach(() => {
			lineStack = ''
		})
		it('should return false', () => {
			expect(isLineOFdelimitation(lineStack)).toEqual(false)
		})
	})
	describe('with  1   2   3 ', () => {
		beforeEach(() => {
			lineStack = ' 1   2   3 '
		})
		it('should return true', () => {
			expect(isLineOFdelimitation(lineStack)).toEqual(true)
		})
	})
	describe('with  1   2   3   4   5   6   7   8   9 ', () => {
		beforeEach(() => {
			lineStack = ' 1   2   3   4   5   6   7   8   9 '
		})
		it('should return true', () => {
			expect(isLineOFdelimitation(lineStack)).toEqual(true)
		})
	})
})
