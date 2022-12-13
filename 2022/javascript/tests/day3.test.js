const { runs } = require('../day3')
const CARACTERISATION_FILE_ENTRY = '../files/day3_test_entry.txt'
const CARACTERISATION_EXPECTED_OUTPUT_RUN1 = 157
const [ run ] = runs
describe('day3', () => {
    test('caracterisation testing run 1', async () => {
        expect(await run(CARACTERISATION_FILE_ENTRY)).toBe(CARACTERISATION_EXPECTED_OUTPUT_RUN1)
    })
})
