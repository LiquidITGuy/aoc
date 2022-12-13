const { runs, splitIntoSameSizeParts, findLetterInCommon, priorityOfLetter } = require('../day3')
const CARACTERISATION_FILE_ENTRY = '../files/day3_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 157
const [ run ] = runs
describe('day3', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
	describe('#splitIntoSameSizeParts', function () {
		it('should split into 2 equals parts "toto" and return ["to","to"]', () => {
			expect(splitIntoSameSizeParts('toto')).toEqual(['to','to'])
		})
	})
	describe('#findLetterInCommon', function () {
		it('should find o in ["to","do"]', () => {
			expect(findLetterInCommon(['to', 'do'])).toEqual('o')
		})
		it('should find z in ["zjixgcèvz§(è!èic","OUHGBTUVFRYTUJzYH78IU"]', () => {
			expect(findLetterInCommon(['zjixgcèvz§(è!èic', 'OUHGBTUVFRYTUJzYH78IU'])).toEqual('z')
		})
		it('should find undefined in ["ABC","abc"]', () => {
			expect(findLetterInCommon(['ABC', 'abc'])).toEqual(undefined)
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
