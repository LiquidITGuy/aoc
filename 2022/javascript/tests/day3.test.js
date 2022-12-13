const { runs, splitIntoSameSizeParts, priorityOfLetter } = require('../day3')
const CARACTERISATION_FILE_ENTRY = '../files/day3_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 157
const CARACTERISATION_EXPECTED_OUTPUT_RUN2 = 70
const [ run, run2 ] = runs
describe('day3', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
	test('caracterisation testing run 2', async () => {
		expect(await run2(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN2)
	})
	describe('#splitIntoSameSizeParts', function () {
		it('should split into 2 equals parts "toto" and return ["to","to"]', () => {
			expect(splitIntoSameSizeParts('toto')).toEqual(['to','to'])
		})
		it('should split into 2 equals parts "vJrwpWtwJgWrhcsFMMfFFhFp" and return ["vJrwpWtwJgWr","hcsFMMfFFhFp"]', () => {
			expect(splitIntoSameSizeParts('vJrwpWtwJgWrhcsFMMfFFhFp')).toEqual(['vJrwpWtwJgWr','hcsFMMfFFhFp'])
		})
	})
	describe('#priorityOfLetter', function () {
		it('should return 1 for a', () => {
			expect(priorityOfLetter('a')).toEqual(1)
		})
		it('should return 26 for z', () => {
			expect(priorityOfLetter('z')).toEqual(26)
		})
		it('should return 42 for P', () => {
			expect(priorityOfLetter('P')).toEqual(42)
		})
	})
})
