const { runs } = require('../day4')
const CARACTERISATION_FILE_ENTRY = '../files/day4_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 2
const [ run ] = runs
describe('day4', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
})
