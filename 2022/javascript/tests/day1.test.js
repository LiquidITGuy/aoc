const { runs } = require('../day1')
const CARACTERISATION_FILE_ENTRY = '../files/day1_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 24000
const CARACTERISATION_EXPECTED_OUTPUT_RUN2 = 45000
const [ run, run2 ] = runs
describe('day1', () => {
	test('caracterisation testing run 1', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
	})
	test('caracterisation testing run 2', async () => {
		expect(await run2(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN2)
	})
})
