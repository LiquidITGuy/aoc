const { run } = require('../day1')
const CARACTERISATION_FILE_ENTRY = '../files/day1_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT = 24000
describe('day1', () => {
	test('caracterisation testing', async () => {
		expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT)
	})
})
