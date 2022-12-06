const { runs } = require('../day2')
const CARACTERISATION_FILE_ENTRY = '../files/day2_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 15
const [ run ] = runs
describe('day2', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
})
